<template>
    <h2 class="big-title">
        <img v-if="image?.url?.length"
             class="big-title__image"
             :class="imageClasses"
             :src="image.url"
             :alt="`${stringTop} ${stringBottom}`"
             :style="imageStyle"
        >
        <span class="big-title__top"
              v-html="stringTop"
        />
        <hr>
        <a v-if="textLink && text"
           :href="textLink"
           class="big-title__text"
           v-html="text"
        />
        <span v-if="!textLink && text"
              class="big-title__text"
              v-html="text"
        />
        <span class="big-title__bottom"
              v-html="stringBottom"
        />
        <hr class="big-title__last">
    </h2>
</template>

<script>
export default {
    name  : 'AppBigTitle',
    props : {
        stringTop : {
            type    : String,
            default : '',
        },

        stringBottom : {
            type    : String,
            default : '',
        },

        text : {
            type    : String,
            default : '',
        },

        textLink : {
            type    : String,
            default : '',
        },

        image : {
            type    : Object,
            default : () => ({}),
        },
    },

    computed : {
        imageClasses() {
            return {
                [`big-title__image_is-${this.image.position.horizontalState}`] : this.image.position.horizontalState,
                [`big-title__image_is-${this.image.position.verticalState}`]   : this.image.position.verticalState,
            };
        },

        imageStyle() {
            return `
                --d-width: ${this.image?.sizes?.dWidth ?? '0'};
                --d-height: ${this.image?.sizes?.dHeight ?? '0'};
                --m-width: ${this.image?.sizes?.mWidth ?? '0'};
                --m-height: ${this.image?.sizes?.mHeight ?? '0'};
                --d-transform: ${this.image?.position?.dTransform ?? 'none'};
                --m-transform: ${this.image?.position?.mTransform ?? 'none'};
            `;
        },
    },
};
</script>

<style lang="scss">
    .big-title {
        $bl: &;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        position: relative;

        &__top,
        &__bottom {
            font-size: 180px;
            font-weight: 500;
            font-family: $drunk;
            line-height: 1;
            text-transform: uppercase;

            @media (max-width: 620px) {
                font-size: 44px;
                letter-spacing: -3.08px;
                margin-bottom: 8px;
            }
        }

        &__top {
            @media (max-width: 620px) {
                margin-left: auto;
                order: 2
            }
        }

        &__bottom {
            order: 2;
            margin-left: auto;
            padding-top: 14px
        }

        hr {
            border: 0;
            border-bottom: 1px solid rgba($white, .2);
            margin: 0;
            width: 100%;

            @media (max-width: 620px) {
                order: 2;
            }
        }

        &__text {
            order: 1;
            font-size: 24px;
            font-weight: 600;
            line-height: 32px;
            text-decoration: none;
            color: $white;

            &[href] {
                &:hover {
                    color: $primary-60;
                }
            }

            @media (max-width: 620px) {
                font-size: 16px;
                line-height: 24px;
                margin-bottom: 24px;
                margin-left: auto;
            }
        }

        &__last {
            order: 3;
            margin-bottom: 0;
        }

        &__image {
            $image: &;

            --d-width: 0;
            --d-height: 0;
            --m-width: 0;
            --m-height: 0;
            --d-transform: none;
            --m-transform: none;

            width: var(--d-width);
            height: var(--d-height);
            position: absolute;
            left: 0;
            top: 0;
            transform: var(--d-transform);

            &_is-left {

                &+#{$bl}__top,
                &#{$image}_is-bottom+*+hr+#{$bl}__bottom {
                    margin-left: auto;
                    margin-right: 0;
                }
            }

            &_is-right {
                right: 0;
                left: auto;

                &+#{$bl}__top,
                &#{$image}_is-bottom+*+hr+#{$bl}__bottom {
                    margin-right: auto;
                    margin-left: 0;
                }
            }

            &_is-bottom {
                top: auto;
                bottom: 0;
            }

            @include mobile-only {
                width: var(--m-width);
                height: var(--m-height);
                transform: var(--m-transform);
            }
        }
    }
</style>
