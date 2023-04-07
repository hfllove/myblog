<template>
<ul>
    <!-- <span class="total">目录</span> -->
    <li v-for="item in items" :key="item.path" class="total">
        <router-link :to="item.path" class="totalA">{{item.title || item.path}}</router-link>
        <!-- <ul v-if="header && itemHeaders(item.headers)"> -->
        <ul v-if="itemHeaders(item.headers)">
            <li v-for="(header,index) in itemHeaders(item.headers)" :key="header.slug">
                <router-link :to="item.path + '#' + header.slug"> {{index+1}}. {{header.title}}</router-link>
            </li>
        </ul>
    </li>
</ul>
</template>

<script>

export default {
    name: "ChildTable",
    mounted() {
        // console.log("items的值是",this.items)
        // console.log("itemHeaders函数",this.itemHeaders())
        // console.log(this.allChilds())
    },
    props: {
        header: {
            type: Boolean,
            default: true
        },
        pageUrl: {
            type: String,
            default: undefined
        },
        max: {
            type: Number,
            default: undefined
        },
        level: {
            type: Number,
            default: undefined
        }
    },
    computed: {
        items() {
            const currentUrl = (this.pageUrl || this.$page.regularPath);
            // console.log(currentUrl,"####currentUrl值")
            return this.itemChilds(currentUrl);
        }
    },
    methods: {
        allChilds() {
            // console.log(this.$site.pages,"####this.$site.pages的值")
            return this.$site.pages
                .sort((a, b) => {
                    const aOrder = a.frontmatter && a.frontmatter.order;
                    const bOrder = b.frontmatter && b.frontmatter.order;

                    if (aOrder && bOrder) {
                        return aOrder > bOrder ? 1 : -1;
                    }

                    return 0;
                })
        },
        itemChilds(currentUrl) {
            return this.allChilds().filter(p => {
                // console.log(p.regularPath,"####p.regularPath的值")
                if (p.regularPath.startsWith(currentUrl) && p.regularPath === currentUrl) {
                    return true;
                }
                // 截掉 regularPath 中的 currentUrl字符串，剩下部分即为当前子页面相对于当前路径的文件或目录名
                // const split = p.regularPath.substr(currentUrl.length).split("/");
                // console.log(split,"###split")
                // // 判断 regularPath 是否以 "/"结尾，并且数组长度是否为2，如果是，则说明当前页面是当前路径下的第二级目录页面
                // if (p.regularPath.endsWith("/") && split.length === 2) {
                //     return true;
                // }
                // // 判断 regularPath 是否以 ".html" 结尾，并且数组长度是否为1，如果是，则说明当前页码是当前路径下的第一级目录页面
                // if (p.regularPath.endsWith(".html") && split.length === 1) {
                //     return true;
                // }

                // return false;
            });
        },
        itemHeaders(headers) {
            return (headers || []).filter(r => r.level === 2)
        },
        nextLevel() {
            if (this.max === undefined) {
                return undefined;
            }

            const number = this.level === undefined ? 1 : this.level;

            return number + 1;
        },
        isMax() {
            if (this.max === undefined) {
                return false;
            }

            if (this.max === 1 && this.level === undefined) {
                return true;
            }

            return this.max <= this.level;
        }
    },
}
</script>

<style scoped>
ul {
    padding-left:0;
}
ul li {
    list-style: none;
}
ul li .totalA {
    font-size: 18px;
    font-weight: 600;
}
ul li ul li {
    list-style: none;
    padding-left: 1rem;
    font-size: 16px;
}
.total {
    /* font-weight: 600; */
    font-size: 18px;
}
</style>