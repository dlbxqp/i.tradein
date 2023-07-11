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
        <span class="big-title__bottom"
              v-html="stringBottom"
        />
        <a v-if="textLink && text"
           :href="textLink"
           class="big-title__text"
           v-html="text"
        />
        <span v-if="!textLink && text"
              class="big-title__text"
              v-html="text"
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
            line-height: 1;
            font-weight: 500;
            text-transform: uppercase;
            font-family: $drunk;
        }

        hr {
            border: 0;
            border-bottom: 1px solid rgba($white, 0.2);
            margin-top: 0;
            margin-bottom: 24px;
            width: 100%;
        }

        &__bottom {
            order: 2;
            margin-left: auto;
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
            }
        }
    }
</style>
