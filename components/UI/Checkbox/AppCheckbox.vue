<template>
    <label class="checkbox">
        <input type="checkbox"
               @input="(event) => $emit('update:checked', event.target.checked)"
               class="visually-hidden"
               :checked="checked"
               :value="value"
               :id="id"
        />
        <span class="checkbox__check">
            <AppIcon class="checkbox__icon"
                     icon="checkbox"
                     :width="10"
                     :height="7"
            />
        </span>
        <span v-if="label">{{ label }}</span>
    </label>
</template>

<script>
import AppIcon from '@/components/UI/Icons/AppIcon.vue';

export default {
    name       : 'AppCheckbox',
    components : {
        AppIcon,
    },

    props : {
        id : {
            type    : String,
            default : '',
        },

        checked : {
            type    : Boolean,
            default : false,
        },

        value : {
            type    : [Boolean, Object],
            default : false,
        },

        label : {
            type    : String,
            default : '',
        },
    },
};
</script>

<style lang="scss">
    .checkbox {
        font-size: inherit;
        line-height: inherit;
        color: inherit;

        &__check {
            border: 1px solid $secondary-50;
            background-color: $secondary-10;
            width: 20px;
            height: 20px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__icon {
            opacity: 0;
            transition-duration: $transition-duration;
        }

        input:checked+&__check &__icon {
            opacity: 1;
        }
    }
</style>
