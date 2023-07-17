<template>
    <div class="human">
        <img v-if="image"
             :src="image"
             :alt="title"
             class="human__image"
        >
        <h3 v-if="title"
            class="human__title"
            v-html="title"
        />
        <ol v-if="list.length"
            class="human__list"
        >
            <li v-for="(item, index) in list"
                :key="`human_item_${index}`"
                class="human__item"
                v-html="item"
            />
        </ol>
    </div>
</template>

<script>
export default {
    name : 'AppHuman',

    props : {
        image : {
            type    : String,
            default : '',
        },

        title : {
            type    : String,
            default : '',
        },

        list : {
            type    : Array,
            default : () => ([]),
        },
    },
};
</script>

<style lang="scss">
.human {
    &__image {
        display: block;
        margin-left: 0;
        width: 200px;
        height: 200px;

        @media all and (max-width: 920px) {
            margin: 0 auto;
            width: 120px;
            height: 120px;
        }
    }

    &__title {
        margin-top: 32px;
        margin-bottom: 32px;
        color: $secondary-50;
        font-family: $drunk;
        font-size: 64px;
        line-height: 63px;
        letter-spacing: -3.2px;
        text-align: left;

        @media all and (max-width: 1380px) {
            font-size: 30px;
            font-weight: 500;
            line-height: 32px;
            letter-spacing: -1.5px;

        }
        @media all and (max-width: 920px) {
            text-align: center;
        }
    }

    &__list {
        @include clear-list;
    }

    &__item {
        counter-increment: num;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        color: $secondary-50;
        display: flex;
        align-items: center;
        padding-top: 12px;
        padding-bottom: 16px;
        border-bottom: 1px solid rgba($white, 0.2);

        @include tablet {
            font-size: 18px;
        }

        &::before {
            content: counter(num);
            color: $secondary-80;
            font-size: 12px;
            font-weight: 600;
            line-height: 24px;
            margin-right: 24px;
        }

        &:nth-child(-n+9)::before {
            content: "0" counter(num);
        }
    }
}
</style>
