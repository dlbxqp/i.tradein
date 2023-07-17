<template>
    <Splide v-if="list"
            :options="sliderOptions"
            :has-track="false"
            class="mob-slider-cards"
    >
        <SplideTrack>
            <SplideSlide v-for="(item, index) in list"
                         :key="`${'mob-slider-cards__item_' + index}`"
                         class="mob-slider-cards__item"
            >
                <AppIcon v-if="item.icon"
                         :icon="item.icon"
                         class="mob-slider-cards__icon"
                         :width="128"
                         :height="128"
                />
                <span class="mob-slider-cards__num">{{ index + 1 < 10 ? `0${index + 1}` : index + 1 }}</span>
                <h4 class="mob-slider-cards__title"
                    v-html="item.title"
                />
            </SplideSlide>
        </SplideTrack>
    </Splide>
</template>

<script>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import AppIcon from '@/components/UI/Icons/AppIcon.vue';

const GAP_SLIDER = 8;
const PADDING_SLIDER = 15;

export default {
    name       : 'AppMobSliderCards',
    components : {
        Splide,
        SplideSlide,
        SplideTrack,
        AppIcon,
    },

    props : {

        /**
         * List for slider
         * @values [
         *  {
         *      icon  : 'icon-name', optional
         *      title : 'title slide', required
         *  }
         * ]
         */
        list : {
            type     : Array,
            required : true,
        },
    },

    data() {
        return {
            sliderOptions : {
                rewind     : true,
                arrows     : false,
                pagination : true,
                perPage    : 1,
                gap        : GAP_SLIDER,
                mediaQuery : 'min',
                padding    : {
                    left  : PADDING_SLIDER,
                    right : PADDING_SLIDER,
                },

                breakpoints : {
                    // eslint-disable-next-line no-magic-numbers
                    544 : {
                        destroy : true,
                    },
                },
            },

            // eslint-disable-next-line no-magic-numbers
            isTrack : window.innerWidth < 544,
        };
    },

    methods : {
        handleResize() {
            // eslint-disable-next-line no-magic-numbers
            this.isTrack = window.innerWidth < 544;
        },
    },

    mounted() {
        window.addEventListener('resize', this.handleResize);
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
};
</script>

<style lang="scss">
    .mob-slider-cards {
        &__item {
            padding: 64px 30px;
            background-color: $black-10;
            border-radius: 16px;
        }

        &__icon {
            color: $primary-70;
            display: block;
            margin: 0 auto;
        }

        &__num {
            display: block;
            text-align: center;
            margin-top: 16px;
            margin-bottom: 12px;
            font-size: 12px;
            font-weight: 600;
            line-height: 24px;
            color: $secondary-80;
        }

        &__title {
            text-align: center;
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            color: $white;
            margin-top: 0;
            margin-bottom: 0;

            @media all and (min-width: 544px) {
                font-size: 20px;
            }
        }

        /* stylelint-disable selector-class-pattern */

        .splide__pagination {
            @include clear-list;

            gap: 12px;
            margin-top: 20px;
        }

        .splide__pagination__page {
            @include clear-input;

            border: 1px solid $secondary-80;
            border-radius: 50%;
            width: 8px;
            height: 8px;
            display: block;

            &.is-active {
                border-color: $secondary-50;
                background-color: $secondary-50;
            }
        }

        @media all and (min-width: 544px) {
            .splide__list {
                display: grid !important;
                grid-template-columns: repeat(auto-fit, minmax(313px, 1fr));
                width: 100% !important;
                gap: 20px;
                grid-auto-rows: 1fr;
            }
        }

        /* stylelint-enable selector-class-pattern */
    }
</style>
