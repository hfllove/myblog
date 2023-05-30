<template>
    <div class="right-menu-wrapper" v-show="list.length > 0">
        <div class="right-menu-margin">
        <div class="right-menu-title">{{total}}</div>
        <div class="right-menu-content" >
            <div class="right-menu-item" 
                v-for="(item, index) in list" 
                :key="index" 
                :style="{ 'padding-left': item.prefix }">
                <a 
                    :href="item.href" 
                    :class="['side-anchor-link', { 'active': index === activeIndex }]" 
                    >
                    {{ item.content }}
                </a>
       
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import debounce from 'lodash.debounce';
import Vue from 'vue'
export default {
    data() {
        return {
            title: '',
            activeIndex: 0,
            list: [],
            total: '目录',
            // 筛选过后的二级标题数组
            filterArray: [],
            // 动态路由的数组
            routeList:[],

        }
    },

    methods: {
        getAnchorList() {
            this.title = this.$page.title;
            let dom_list = this.routeList
            // console.log(dom_list,"dom_list的值111")
            // console.log(this.routeHash,"routeHash的值")
            if (dom_list.length === 0) {
                this.list = [];
                return;       
            }
            
            let baseLine = Number(dom_list[0].parentNode.tagName.slice(1));
            let list = Array().map.call(
                dom_list,
                value => ({ 
                    content: value.parentNode.innerText.slice(1),
                    href: value.href,
                    // 控制右侧标题到边框的距离
                    prefix: (value.parentNode.tagName.slice(1) - baseLine+1) * 1 + 'rem',
                    offsetTop: value.parentNode.offsetTop - 100,
                    active: false
                })
            )

            this.list = list;
        },

        freshAnchor() {
            if (document.title !== this.title) this.getAnchorList();

            let scrollTop = window.pageYOffset;
            let innerhHeight = window.innerHeight;
            let scope = [
                scrollTop,
                scrollTop + innerhHeight / 4
            ];
            let middleLine = scrollTop + innerhHeight / 3;
            let list = this.list;
            let nextActive = -1;
            list.forEach(
                (value, index) => {
                    if (nextActive === -1 && value.offsetTop > scope[0] && value.offsetTop < scope[1]) nextActive = index;
                    if (nextActive === -1  && middleLine < value.offsetTop) nextActive = index - 1;
                }
            )
            if (nextActive === -1 || this.activeIndex === nextActive) return;
            list.forEach(value => value.active = false);
            list[nextActive].active = true;
            this.activeIndex = nextActive;
        },

        activeDomList () {
            let dom_List = Array.prototype.slice.call(document.querySelectorAll('.header-anchor'));
            // console.log(dom_list,111)
            
            // console.log(typeof(dom_list))
            let dom_list = dom_List.filter(item=>{
                return item.parentNode.tagName.indexOf('2')== -1
            })
            return dom_list.filter(itemArray=>{
                // console.log(itemArray.parentNode.id,"静态标题的id")
                return this.filterArray.some(itemName=>{
                    // console.log(itemName.title,"路由地址截取的标题")
                    return itemArray.parentNode.id==itemName.slug.toLowerCase()
                    })
            })
        }
    },

    mounted() {
        this.routeList = this.activeDomList()
        this.title = this.$page.title;
        window.onload = this.getAnchorList();
        window.onscroll = debounce(this.freshAnchor);
    },

    watch: {
        "$page.title": {
            handler: function() {
                 this.filterArray = this.detArray.filter(itemArr=>itemArr.some(obj=>obj.slug == this.routeHash)).flat(Infinity)
                // this.getAnchorList()
                // console.log(this.activeDomList(),"测试这个函数是否生效")
                // this.$nextTick(()=>{
                  
                // })
                this.routeList = this.activeDomList()

                  Vue.nextTick(this.getAnchorList())
            },
            deep: true
        }
    },

    computed: {
        routeHash () {
            // return decodeURIComponent(this.$route.hash).slice(1).replace(/-/g, ' ')
            return decodeURIComponent(this.$route.hash).slice(1)
        },
        // 根据 level=2 将所有标题按照顺序划分数组
        detArray () {
            return this.$page.headers.reduce((pre, curr) => {
            if (curr.level === 2) {
                // console.log(pre,"测试pre是什么")
                pre.push([curr]);
            } else if (pre.length) {
                pre[pre.length - 1].push(curr);
            }
            return pre;
            }, [])
        }
    }
};

function deepClone(obj, clonedMap = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (clonedMap.has(obj)) {
    return clonedMap.get(obj);
  }
  let clonedObj = Array.isArray(obj) ? [] : {};
  clonedMap.set(obj, clonedObj);
  for (let key in obj) {
    clonedObj[key] = deepClone(obj[key], clonedMap);
  }
  return clonedObj;
}


</script>


<style>
.right-menu-wrapper {
    width: 230px;
    float: right;
    /* margin-right: -285px; */
    position: fixed;
    top: 38px;
    /*right: 11rem;*/
    left: 82%;
    font-size: .9rem;
}
.right-menu-wrapper .right-menu-margin {
    margin-top: 4.6rem;
    border-radius: 3px;
    overflow: hidden;
    border-left: 1px solid #e2e2e2;
}
.right-menu-wrapper .right-menu-title {
    padding: 10px 15px 0;
    background: #fff;
    font-size: 1rem;
}
.right-menu-wrapper .right-menu-title:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #e2e2e2;
    margin-top: 10px;
}
.right-menu-wrapper .right-menu-content {
    max-height: 80vh;
    position: relative;
    overflow: hidden;
    background: #fff;
    padding: 4px 3px 4px 0;
}
/* .right-menu-margin {
    position: fixed;
    right: 10rem;
    top: 110px;
    z-index: 1;
    width: 12rem;
    max-height: calc(100% - 130px);
    overflow: auto;
    border-left: 0.5rem #2c3e50 solid;
    font-size: 14px;
    font-weight: 500;
    transition: max-height 0.25s;
    scrollbar-width: none;
    -ms-overflow-style: none;
} */
.right-menu-margin .right-menu-content {
    list-style: none;
    margin: 0;
    padding: 0.5rem;
}
.right-menu-wrapper .right-menu-content .right-menu-item {
    padding: 4px 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
}
.right-menu-content .side-anchor-link {
    text-decoration: none;
    color: black;
}
.right-menu-content .side-anchor-link:hover {
    color: #039be5;
}
.side-anchor-link.active {
    color: #0277bd;
}
.right-menu-margin::-webkit-scrollbar { 
    width: 0 
}
@media (max-width: 1200px) {
  .right-menu-margin {
    display: none;
  }
}
</style>
