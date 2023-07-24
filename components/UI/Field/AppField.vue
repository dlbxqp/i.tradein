<template>
    <label class="field"
           :class="classNames"
    >
        <div class="field__wrapper">
            <span class="field__label"
                  v-if="label"
                  v-html="label"
            />
            <input v-if="!mask"
                   :value="modelValue"
                   :type="type"
                   class="field__input"
                   :name="name"
                   :placeholder="placeholder"
                   :required="required"
                   @input="updateValue"
            >
            <input v-else
                   :value="modelValue"
                   v-imask="maskDirrective"
                   @accept="onAccept"
                   @complete="onComplete"
                   class="field__input"
                   :placeholder="placeholder"
            >

            <span v-if="interlineation"
                  class="field__interlineation"
                  v-html="interlineation"
            />
        </div>
        <p v-if="isError && error"
           class="field__error"
        >{{ error }}</p>
    </label>
</template>

<script>
import { IMaskDirective } from 'vue-imask';

export default {
    name       : 'AppField',
    directives : {
        imask : IMaskDirective,
    },

    props : {

        /**
         * Type for input
         * @values standart type's for input (text, tel, email, number)
         */

        type : {
            type    : String,
            default : 'text',
        },

        name : {
            type     : String,
            required : true,
        },

        // Use v-model in parent component
        modelValue : {
            type    : String,
            default : '',
        },

        label : {
            type    : String,
            default : '',
        },

        mask : {
            type    : String,
            default : '',
        },

        interlineation : {
            type    : String,
            default : '',
        },

        placeholder : {
            type    : String,
            default : '',
        },

        isError : {
            type    : Boolean,
            default : false,
        },

        error : {
            type    : String,
            default : '',
        },

        required : {
            type    : Boolean,
            default : false,
        },

        regExp : {
            type    : RegExp,
            default : null,
        },

        min : {
            type    : Number,
            default : 0,
        },

        max : {
            type    : Number,
            default : 0,
        },
    },

    data() {
        return {
            maskDirrective : {
                mask : this.mask,
                lazy : false,
            },
        };
    },

    computed : {
        classNames() {
            return {
                'field_is-show_interlineation' : this.interlineation.length,
                'field_is-show_placeholder'    : this.placeholder.length,
                'field_is-show_label'          : this.label.length,
                'field_not-empty'              : this.modelValue.length,
                'field_is-error'               : this.isError,
            };
        },
    },

    methods : {
        onAccept(e) {
            const maskRef = e.detail;

            this.$emit('update:modelValue', maskRef.value);
            this.$emit('emiter', ['update:modelValue', maskRef.value]);

            this.$emit('add-error', this.name);
            this.$emit('emiter', ['add-error', this.name]);
        },

        onComplete() {
            this.$emit('remove-error', this.name);
            this.$emit('emiter', ['remove-error', this.name]);
        },

        updateValue(e) {
            if (this.regExp) {
                e.target.value = e.target.value.replaceAll(this.regExp, '');
            }

            if (this.required && e.target.value.length) {
                this.$emit('remove-error', this.name);
                this.$emit('emiter', ['remove-error', this.name]);
            }
            else {
                this.$emit('add-error', this.name);
                this.$emit('emiter', ['add-error', this.name]);
            }

            if (this.max > 0) {
                const fieldCheckMax = this.checkMaxField(e.target.value);

                if (fieldCheckMax?.length) {
                    e.target.value = fieldCheckMax;
                }
            }

            if (this.min > 0) {
                this.checkMinField(e.target.value);
            }

            this.$emit('update:modelValue', e.target.value);
            this.$emit('emiter', ['update:modelValue', e.target.value]);
        },

        checkMaxField(val) {
            if (this.type === 'number') {
                if (parseFloat(val) > this.max) {
                    this.$emit('add-error', this.name);
                    this.$emit('emiter', ['add-error', this.name]);
                }
                else {
                    this.$emit('remove-error', this.name);
                    this.$emit('emiter', ['remove-error', this.name]);
                }
            }
            else if (val.length > this.max) {
                return val.substring(0, this.max);
            }
        },

        checkMinField(val) {
            if (this.type === 'number') {
                if (parseFloat(val) < this.min) {
                    this.$emit('add-error', this.name);
                    this.$emit('emiter', ['add-error', this.name]);
                }
                else {
                    this.$emit('remove-error', this.name);
                    this.$emit('emiter', ['remove-error', this.name]);
                }
            }
            else {
                if (val.length < this.min) {
                    this.$emit('add-error', this.name);
                    this.$emit('emiter', ['add-error', this.name]);
                }
                else {
                    this.$emit('remove-error', this.name);
                    this.$emit('emiter', ['remove-error', this.name]);
                }
            }
        },
    },
};
</script>

<style lang="scss" scoped>
    @mixin label-to-top {
        font-weight: 400;
        line-height: 16px;
        font-size: 12px;
        letter-spacing: .3px;
        transform: translateY(calc(-100% + 8px));
    }

    .field {
        $bl: &;

        &__wrapper {
            align-items: center;
            background-color: $secondary-10;
            border: 1px solid $secondary-20;
            border-radius: 12px;
            box-sizing: border-box;
            display: flex;
            padding: 16px;
            position: relative;
            width: 100%;
        }

        &__label {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            padding: 16px;
            font-size: 16px;
            font-weight: 400;
            line-height: 18px;
            width: 110%;
            color: $secondary-60;
            transition-duration: $transition-duration;
            transition-property: color, transform, font-size;
        }

        &__input {
            @include clear-input;

            width: 100%;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            color: $black;
            outline: none;
            transition-duration: $transition-duration;

            &[type="number"] {
                @include clear-number;
            }

            &::placeholder {
                color: $secondary-60;
            }
        }

        &__interlineation {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            color: $secondary-60;
            transition-duration: $transition-duration;
            margin-left: 2px;
        }

        &__error {
            color: $red-50;
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0.3px;
            margin-top: 4px;
            margin-bottom: 0;
            padding-left: 16px;
            padding-right: 16px;
            display: none;
        }

        &_is-show {
            $is-show: &;

            &_label {

                &:focus-within,
                &#{$bl}_not-empty,
                &#{$is-show}_placeholder {
                    #{$bl}__label {
                        @include label-to-top;
                    }

                    #{$bl}__input,
                    #{$bl}__interlineation {
                        transform: translateY(2px);
                    }
                }
            }
        }

        &:focus-within:not(&_is-error) {
            #{$bl}__wrapper {
                box-shadow: 0 0 2px 1px $secondary-40;
            }

            #{$bl}__label {
                color: $black;
            }
        }

        &_is-error {
            #{$bl}__wrapper {
                border-color: $red-50;
                box-shadow: 0 0 0 1px $red-50;
                background-color: rgb(245 2 0 / 15%);
            }

            #{$bl}__input,
            #{$bl}__interlineation,
            #{$bl}__label {
                color: $red-50 !important;
            }

            #{$bl}__error {
                display: block;
            }
        }
    }
</style>
