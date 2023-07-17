<template>
    <div class="contra-list">
        <div class="contra-list__human">
            <img v-if="human.image"
                 :src="human.image"
                 :alt="human.title"
                 class="contra-list__image"
            >
            <h3 v-if="human.title"
                class="contra-list__title"
                v-html="human.title"
            />
        </div>

        <ol class="contra-list__list"
            :class="listClasses"
        >
            <li v-for="(item, index) in list"
                :key="`contra_item_${index}`"
                class="contra-list__item"
                :class="{ 'contra-list__item_strike': isStrike }"
                v-html="item"
            />
        </ol>
    </div>
</template>

<script>

export default {
    name : 'AppContraList',

    props : {
        human : {
            type     : Object,
            required : true,
        },

        list : {
            type     : Array,
            required : true,
        },

        isStrike : {
            type    : Boolean,
            default : false,
        },
    },

    computed : {
        listClasses() {
            return {
                'contra-list__list_multicolumn' : this.list.length > 5,
            };
        },
    },
};
</script>

<style lang="scss">
    .contra-list {
        background-color: $black-10;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        padding: 32px;

        &__image {
            margin: -60px auto 32px 0;
            display: block;
            width: 120px;
            height: 120px;

            @media all and (max-width: 1024px) {
                margin: 0 auto 32px auto;
                width: 200px;
                height: 200px;
            }
        }

        &__title {
            color: $secondary-50;
            font-size: 40px;
            line-height: 44px;
            letter-spacing: -2px;
            text-align: left;
            font-weight: 500;
            font-family: $drunk;
            margin-bottom: 32px;
            max-width: 420px;

            @media all and (max-width: 740px) {
                display: flex; justify-content: center;
                font-size: 30px;
                line-height: 32px;
                letter-spacing: -2.1px;
                text-align: center;
                max-width: none;
            }
        }

        &__list {
            counter-reset: num;
            padding: 0;

            &_multicolumn {
                @media all and (min-width: 1350px) {
                    column-count: 2;
                    column-gap: 40px;
                }
            }
        }

        &__item {
            border-bottom: 1px solid $secondary-90;
            color: $secondary-40;
            display: flex;
            font-size: 16px;
            font-weight: 600;
            font-family: $inter;
            line-height: 24px;
            margin-right: 24px;
            padding: 16px 0;
            position: relative;

            &_strike {
                &::after {
                    content: '';
                    background: transparent url('/images/stroke-red.svg') center left no-repeat;
                    background-size: 100% 100%;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 24px;
                    width: 60%; height: 100%;
                }
            }

            &:nth-child(5n + 5) {
                border-bottom: none;
            }

            &::before {
                counter-increment: num;
                content: counter(num);
                color: $secondary-80;
                font-size: 12px;
                line-height: 24px;
                margin-right: 24px;
            }

            &:nth-child(-n+9)::before {
                content: '0' counter(num);
            }
        }
    }
</style>
