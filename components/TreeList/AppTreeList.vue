<template>
    <div class="tree-list">
        <ol class="tree-list__list">
            <li v-for="(item, index) in list"
                :key="`tree_list_item_${index}`"
                class="tree-list__item"
                v-html="item"
            />
        </ol>

        <ul class="tree-list__masonry tree-list__masonry_left">
            <li v-for="(item, index) in leftList"
                :key="`tree_masonry_left_${index}`"
                class="tree-list__item"
                v-html="item"
            />
        </ul>

        <ul class="tree-list__masonry tree-list__masonry_right">
            <li v-for="(item, index) in rightList"
                :key="`tree_masonry_right_${index}`"
                class="tree-list__item"
                v-html="item"
            />
        </ul>
    </div>
</template>

<script>
export default {
    name  : 'AppTreeList',
    props : {
        list : {
            type     : Array,
            required : true,
        },
    },

    computed : {
        leftList() {
            return this.list.filter((item, index) => index === 0 || index % 2 === 0);
        },

        rightList() {
            return this.list.filter((item, index) => index % 2 > 0);
        },
    },
};
</script>

<style lang="scss">
    .tree-list {
        $bl: &;

        display: flex;

        &__list {
            @include clear-list;

            counter-reset: num;

            @include tablet {
                display: none;
            }

            #{$bl}__item {
                &::before {
                    counter-increment: num;
                }
            }
        }

        &__masonry {
            @include clear-list;

            display: none;

            @include tablet {
                display: inline-flex;
                flex-direction: column;
                justify-content: center;
                padding: 4px;
            }

            &_left {
                counter-reset: num -1;
                align-items: flex-end;
            }

            &_right {
                counter-reset: num 0;
                align-items: flex-start;
            }
        }

        &__item {
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            color: $secondary-50;
            display: flex;
            align-items: center;
            padding-top: 12px;
            padding-bottom: 16px;
            border-bottom: 1px solid rgba($white, 0.2);
            white-space: nowrap;

            @include tablet {
                border: 1px solid rgba($white, 0.2);
                border-radius: 8px;
                display: inline-flex;
                flex-wrap: wrap;
                font-size: 20px;
                line-height: 24px;
                margin-bottom: 8px;
                padding: 12px 20px 16px;
            }

            &::before {
                counter-increment: num 2;
                content: counter(num);
                color: $secondary-80;
                font-size: 12px;
                font-weight: 600;
                line-height: 24px;
                margin-right: 24px;

                @include tablet {
                    margin-right: 0;
                    margin-bottom: 8px;
                    width: 100%;
                }
            }

            &:nth-child(-n+9)::before {
                content: "0" counter(num);
            }
        }
    }
</style>
