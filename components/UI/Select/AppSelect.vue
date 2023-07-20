<template>
    <div ref="select"
         class="select"
         @blur="isOpened = false"
         @click="isOpened = !isOpened"
         :title="selectedLabel"
    >
        <div class="select__wrapper">
            <span class="select__label"
                  :class="{ 'select__label_top': value.length }"
                  v-if="label"
                  v-html="label"
            />
            <div :name="name"
                 class="select__value"
                 :class="{ 'select__value_opened': isOpened }"
                 v-html="selectedLabel"
            />

            <div class="select__list"
                 :class="{ 'select__list_closed': !isOpened }"
            >
                <div v-for="(item, index) in options"
                     :key="`select_option_${index}`"
                     class="select__option"
                     v-html="item.label"
                     @click="selectedOption(item.value)"
                />
            </div>

            <AppIcon class="select__arrow"
                     icon="arrow-select"
                     :width="5"
                     :height="9"
            />
        </div>

        <p v-if="isError && error"
           class="field__error"
        >
            {{ error }}
        </p>
    </div>
</template>

<script>
import AppIcon from '@/components/UI/Icons/AppIcon.vue';

export default {
    name       : 'AppSelect',
    components : {
        AppIcon,
    },

    props : {
        name : {
            type     : String,
            required : true,
        },

        label : {
            type    : String,
            default : '',
        },

        options : {
            type     : Array,
            required : true,
        },

        value : {
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
    },

    data() {
        return {
            isOpened : false,
            selected : this.value
                ? this.value
                : this.options.length > 0
                    ? this.options[0].value
                    : null,
        };
    },

    computed : {
        selectedLabel() {
            return this.options.filter(item => item.value === this.selected)[0].label;
        },
    },

    methods : {
        selectedOption(value) {
            this.selected = value;
            this.$emit('update:modelValue', value);

            setTimeout(() => {
                this.isOpened = false;
            }, 0);
        },

        onClickOutsideHandler(event) {
            if (event.target.closest('.select') !== this.$refs.select) {
                this.isOpened = false;
            }
        },
    },

    mounted() {
        this.$emit('update:modelValue', this.selected);
        document.addEventListener('click', this.onClickOutsideHandler);
    },

    unmounted() {
        document.removeEventListener('click', this.onClickOutsideHandler);
    },
};
</script>

<style lang="scss">
    @mixin label-to-top {
        font-weight: 400;
        line-height: 16px;
        font-size: 12px;
        color: $secondary-60;
        letter-spacing: .3px;
        transform: translateY(calc(-100% + 8px));
    }

    .select {
        $bl: &;

        cursor: pointer;

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

        &__arrow {
            position: absolute;
            content: "";
            top: 50%;
            transform: translateY(-50%) rotate(90deg);
            right: 20px;
            color: $black;
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

            &_top {
                @include label-to-top;
            }
        }

        &__value {
            width: 100%;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            color: $black;
            transition-duration: $transition-duration;
            transform: translateY(2px);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            padding-right: 18px;
        }

        &__list {
            color: $black;
            border-radius: 12px;
            padding: 12px 0;
            overflow: hidden;
            position: absolute;
            background-color: $white;
            top: calc(100% + 12px);
            left: 0;
            right: 0;
            z-index: 1;
            box-shadow: $shadow-100;

            &_closed {
                display: none;
            }
        }

        &__option {
            cursor: pointer;
            display: block;
            padding: 16px;
            transition-property: background-color;
            transition-duration: $transition-duration;

            &:hover,
            &_selected {
                background-color: $secondary-20;
                cursor: pointer;
            }
        }
    }
</style>
