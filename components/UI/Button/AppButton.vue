<template>
    <component :is="tag"
               class="button"
               :href="href"
               :to="to"
               :class="classNames"
               :disabled="disabled"
               v-bind="$attrs"
    >
        <AppIcon v-if="icon"
                 :icon="icon"
                 class="button__icon"
                 :class="classIcon"
                 :width="iconSize"
                 :height="iconSize"
        />
        <span class="button__wrapper">
            <slot/>
        </span>
    </component>
</template>

<script>
import AppIcon from '@/components/UI/Icons/AppIcon.vue';
export default {
    name       : 'AppButton',
    components : {
        AppIcon,
    },

    inheritAttrs : false,
    props        : {
        to : {
            type    : String,
            default : null,
        },

        href : {
            type    : String,
            default : null,
        },

        disabled : {
            type    : Boolean,
            default : false,
        },

        /**
         * The size of the button
         * @values small, medium, large
         */
        size : {
            type    : String,
            default : 'medium',
        },

        /**
         * The variant of the button
         * @values base, clear, ghost
         */
        variant : {
            type    : String,
            default : 'base',
        },

        /**
         * The color of the button
         * @values black, white, primary_30, primary_60,
         *         primary_70, secondary, secondary_15, secondary_50
         */
        color : {
            type    : String,
            default : 'primary_60',
        },

        /**
         * The 100% button width
         */
        block : {
            type    : Boolean,
            default : false,
        },

        icon : {
            type    : String,
            default : '',
        },

        iconSize : {
            type    : Number,
            default : 24,
        },

        /**
         * The position of icon
         * @values left, right
         */
        iconPosition : {
            type    : String,
            default : 'right',
        },
    },

    computed : {
        tag() {
            if (this.to) {
                if (this.to.startsWith('http')) {
                    return 'a';
                }

                return 'router-link';
            }

            return this.href ? 'a' : 'button';
        },

        classNames() {
            return {
                [`button_color_${this.color}`] : this.color,
                'button_block'                 : this.block,
                'button_disabled'              : this.disabled,
                [`button_${this.variant}`]     : this.variant,
                [`button_size_${this.size}`]   : this.size,
            };
        },

        classIcon() {
            return {
                [`button__icon_${this.iconPosition}`] : this.iconPosition,
            };
        },
    },
};
</script>

<style lang="scss" scoped>
    @mixin not-disabled($bl) {
        @if & {
            &:not(:disabled):not(#{$bl}_disabled) {
                @content;
            }
        }
    }

    .button {
        $bl: &;

        @include clear-input;

        text-size-adjust: none;
        box-sizing: border-box;
        cursor: pointer;
        border: 1px solid transparent;
        color: $black;
        font-weight: 600;
        text-align: center;
        display: inline-flex;
        vertical-align: top;
        justify-content: center;
        align-items: center;
        transition-duration: $transition-duration;
        transition-property: color, background-color, opacity, border-color;
        -webkit-tap-highlight-color: rgb(0 0 0 / 0%);

        &_disabled,
        &:disabled {
            cursor: not-allowed;
            pointer-events: none;
            opacity: 0.5;
        }

        &_block {
            display: flex;
            width: 100%;
        }

        &_color {
            &_black {
                &#{$bl}_base {
                    background-color: $black;
                    color: $white;

                    @include not-disabled($bl) {
                        &:hover {
                            background-color: $secondary-90;
                        }

                        &:active {
                            background-color: $secondary-80;
                        }
                    }

                    &:disabled,
                    &#{$bl}_disabled {
                        opacity: 0.1;
                    }
                }

                &#{$bl}_ghost {
                    border-color: $black;

                    @include not-disabled($bl) {
                        &:hover {
                            border-color: $secondary-90;
                            color: $secondary-90;
                        }

                        &:active {
                            border-color: $secondary-80;
                            color: $secondary-80;
                        }
                    }

                    &:disabled,
                    &#{$bl}_disabled {
                        opacity: 0.3;
                    }
                }

                &#{$bl}_clear {
                    @include not-disabled($bl) {
                        &:hover {
                            color: $secondary-90;
                        }

                        &:active {
                            color: $secondary-80;
                        }
                    }

                    &:disabled,
                    &#{$bl}_disabled {
                        opacity: 0.3;
                    }
                }
            }

            &_white {
                &#{$bl}_base {
                    background-color: $white;

                    @include not-disabled($bl) {
                        &:hover {
                            background-color: $secondary-60;
                        }

                        &:active {
                            background-color: $secondary-80;
                        }
                    }
                }

                &#{$bl}_ghost {
                    border-color: $white;

                    @include not-disabled($bl) {
                        &:hover {
                            border-color: $secondary-60;
                            color: $secondary-60;
                        }

                        &:active {
                            border-color: $secondary-80;
                            color: $secondary-80;
                        }
                    }
                }

                &:disabled,
                &#{$bl}_disabled {
                    opacity: 0.3;
                }
            }

            &_primary_30 {
                &#{$bl}_base {
                    background-color: $primary-30;
                    color: $primary-80;

                    @include not-disabled($bl) {
                        &:hover {
                            background-color: $primary-40;
                        }

                        &:active {
                            background-color: $primary-50;
                            color: $primary-100;
                        }
                    }

                    &:disabled,
                    &#{$bl}_disabled {
                        opacity: 0.4;
                        color: $primary-100;
                    }
                }
            }

            &_primary_60 {
                &#{$bl}_base {
                    background-color: $primary-60;

                    @include not-disabled($bl) {
                        &:hover {
                            background-color: $primary-70;
                        }

                        &:active {
                            background-color: $primary-80;
                        }
                    }
                }
            }

            &_primary_70 {
                &#{$bl}_ghost {
                    border-color: $primary-70;
                    color: $primary-70;

                    @include not-disabled($bl) {
                        &:hover {
                            border-color: $primary-90;
                            color: $primary-90;
                        }

                        &:active {
                            border-color: $primary-100;
                            color: $primary-100;
                        }
                    }
                }

                &#{$bl}_clear {
                    color: $primary-70;

                    @include not-disabled($bl) {
                        &:hover {
                            color: $primary-90;
                        }

                        &:active {
                            color: $primary-100;
                        }
                    }
                }
            }

            &_secondary_15 {
                &#{$bl}_base {
                    background-color: $secondary-15;

                    @include not-disabled($bl) {
                        &:hover {
                            background-color: $secondary-20;
                        }

                        &:active {
                            background-color: $secondary-40;
                        }
                    }
                }
            }

            &_secondary_30 {
                &#{$bl}_base {
                    background-color: $secondary-30;

                    @include not-disabled($bl) {
                        &:hover {
                            background-color: $secondary-40;
                        }

                        &:active {
                            background-color: $secondary-60;
                        }
                    }
                }
            }

            &_secondary_50 {
                &#{$bl}_ghost {
                    border-color: $secondary-50;
                    color: $black;

                    @include not-disabled($bl) {
                        &:hover {
                            border-color: $secondary-60;
                            color: $secondary-90;
                        }

                        &:active {
                            border-color: $secondary-70;
                            color: $secondary-80;
                        }
                    }
                }

                &#{$bl}_base {
                    background-color: $secondary-50;

                    @include not-disabled($bl) {
                        &:hover {
                            background-color: $secondary-60;
                        }

                        &:active {
                            background-color: $secondary-80;
                        }
                    }
                }
            }

            &_secondary_100 {
                &#{$bl}_base {
                    background-color: $secondary-100;
                    color: $secondary-80;

                    @include not-disabled($bl) {
                        &:hover {
                            background-color: $secondary-90;
                            color: $secondary-60;
                        }

                        &:active {
                            color: $secondary-50;
                        }
                    }
                }

                &:disabled,
                &#{$bl}_disabled {
                    opacity: 0.3;
                }
            }
        }

        &_size {
            &_small {
                border-radius: 8px;
                font-size: 12px;
                line-height: 1.3;
                letter-spacing: 0.25px;
                padding: 7px 12px;
            }

            &_medium {
                border-radius: 12px;
                font-size: 14px;
                line-height: 1.4;
                padding: 13px 18px;
            }

            &_large {
                border-radius: 14px;
                font-size: 16px;
                line-height: 1.5;
                padding: 15px 24px;
            }
        }

        &__icon {
            fill: currentcolor;
            stroke: currentcolor;

            &_left {
                order: -1;
                margin-right: 8px;
            }

            &_right {
                order: 1;
                margin-left: 8px;
            }
        }
    }
</style>
