<template>
    <label class="field"
        :class="classNames"
    >
        <div class="field__wrapper">
            <span class="field__label"
                v-if="label"
                v-html="label"
            />
                <input :value="modelValue"
                    :type="type"
                    class="field__input"
                    :name="name"
                    :placeholder="placeholder"
                    :required="required"
                    @input="updateValue"
                >
            <span v-if="interlineation"
            class="field__interlineation"
            v-html="interlineation"
        />
        </div>
        <p v-if="error"
            class="field__error"
        >{{ error }}</p>
    </label>
</template>

<script>
export default {
    name  : 'AppField',
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
    },

    computed : {
        classNames() {
            return {
                'field_is-show_interlineation' : this.interlineation.length,
                'field_is-show_placeholder'    : this.placeholder.length,
                'field_is-show_label'          : this.label.length,
                'field_not-empty'              : this.modelValue.length, //Почему не работает?
                'field_is-error'               : this.error.length || this.isError,
            };
        },
    },

    methods : {
        updateValue(e) {
            this.$emit('update:modelValue', e.target.value)

            e.target.value.length > 0 && e.target.classList.add();

            //< name
            if(
                this.name === 'name'
            ){
                e.target.value = e.target.value.replaceAll(/[^а-яёa-z\s-]/ig, '');
            }
            //> name

            //< numbers
            if(
                this.name === 'floors'
                || this.name === 'floor'
                || this.name === 'rooms'
                || this.name === 'total-area'
                || this.name === 'kitchen-area'
            ){
                e.target.value = e.target.value.replaceAll(/\D/ig, '');

                if(
                    this.name === 'floors'
                    || this.name === 'floor'
                    || this.name === 'rooms'
                    || this.name === 'kitchen-area'
                ) {
                    e.target.value.length > 2 && (e.target.value = e.target.value.substring(0, 2));
                } else if(this.name === 'total-area') {
                    e.target.value.length > 3 && (e.target.value = e.target.value.substring(0, 3));
                }
            }
            //> numbers
        },

        checkForm(e) {
            e.preDefault();

            this.isError = true;

            if (this.name === 'name') {
                e.target.value.length === 0 && (this.error = 'Укажите имя.');
            } else if (this.name === 'phone') {
                e.target.value.length === 0 && (this.error = 'Укажите номер телефона.');
            } else if (this.name === 'address') {
                e.target.value.length === 0 && (this.error = 'Укажите адрес.');
            } else if (this.name === 'house-number') {
                e.target.value.length === 0 && (this.error = 'Укажите номер дома.');
            } else if (this.name === 'floors') {
                e.target.value.length === 0 && (this.error = 'Укажите этажность дома.');
            } else if (this.name === 'floor') {
                e.target.value.length === 0 && (this.error = 'Укажите этаж квартиры.');
            } else if (this.name === 'rooms') {
                e.target.value.length === 0 && (this.error = 'Укажите количество комнат.');
            } else if (this.name === 'total-area') {
                e.target.value.length === 0 && (this.error = 'Укажите площадь квартиры.');
            } else if (this.name === 'kitchen-area') {
                e.target.value.length === 0 && (this.error = 'Укажите площадь кухни.');
            }

            return this.isError;
        }
    },
};
</script>

<style lang="scss" scoped>
    @mixin label-to-top {
        font-weight: 400;
        line-height: 16px;
        font-size: 12px;
        color: $secondary-60;
        letter-spacing: .3px;
        transform: translateY(calc(-100% + 6px));
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
            color: $black;
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
                color: inherit;
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
        }
    }
</style>
