<template>
    <div class="contra__board">
        <div class="contra__human">
            <img v-if="human.image"
                :src="human.image"
                :alt="human.title"
                class="contra__human__image"
            >
            <h3 v-if="human.title"
                class="contra__human__title"
                v-html="human.title"
            />
        </div>

        <ol class="contra__list" :class="listClasses">
            <li v-for="(item, index) in list"
                :key="`contra_item_${index}`"
                class="contra__item"
                v-html="item"
            />
        </ol>
    </div>
</template>

<script>
import AppHuman from '@/components/Human/AppHuman.vue';

export default {
    name: 'AppContraList',
    components : {
        AppHuman
    },
    props : {
        human : {
            type     : Array,
            required : true
        },
        list : {
            type     : Array,
            required : true
        }
    },

    computed : {
/*
        listClasses(){
            return {
                ['contra__list_multicolumn'] : list.length > 5
            }
        }
 */
    },

    mounted(){
     const contraLists = document.querySelectorAll('.contra__list')
     Array.from(contraLists).forEach((list) => {
         if(list.querySelectorAll('li').length > 5) list.classList.add('contra__list_multicolumn')
     })
    }
}
</script>

<style lang="scss">
.contra {
    &__board {
        background-color: rgb(16, 16, 16);
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        padding: 32px;
    }

    &__human {
        &__image {
            margin-top: -60px auto 32px auto;
            display: block;
            width: 120px;
            height: 120px;

            @include tablet {
                margin-left: 0;
                width: 200px;
                height: 200px;
            }
        }

        &__title {
            color: $secondary-50;
            font-size: 30px;
            font-weight: 500;
            font-family: $drunk;
            line-height: 32px;
            letter-spacing: -2.1px;
            text-align: center;
            margin-bottom: 32px;
            max-width: 420px;

            @include tablet {
                font-size: 40px;
                line-height: 44px;
                letter-spacing: -2px;
                text-align: left;
            }
        }
    }

    &__list {
        counter-reset: num;
        padding: 0;

        &_multicolumn{
            column-count: 2;
            column-gap: 40px;
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
