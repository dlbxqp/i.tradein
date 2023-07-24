<template>
    <!-- eslint-disable-next-line vue/no-undef-components -->
    <client-only placeholder="loading...">
        <ImgComparisonSlider :value="dividerPosition"
                             class="comparison"
        >
            <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
            <figure slot="first"
                    class="comparison__before"
            >
                <img class="comparison__picture"
                     :src="before.image"
                     :alt="before?.text"
                >
                <figcaption v-if="before.text"
                            v-html="before.text"
                />
            </figure>
            <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
            <figure slot="second"
                    class="comparison__after"
            >
                <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
                <img slot="second"
                     class="comparison__picture"
                     :src="after.image"
                     :alt="after?.text"
                >
                <figcaption v-if="after.text"
                            v-html="after.text"
                />
            </figure>

            <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
            <div slot="handle"
                 v-html="divider"
            />
        </ImgComparisonSlider>
    </client-only>
</template>
 <!-- eslint-enable -->

<script>
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
    name       : 'AppComparison',
    components : {
        ImgComparisonSlider : defineAsyncComponent(() => import('@img-comparison-slider/vue').then(
            ({ ImgComparisonSlider }) => ImgComparisonSlider,
        )),
    },

    props : {
        before : {
            type     : Object,
            required : true,
        },

        after : {
            type     : Object,
            required : true,
        },

        divider : {
            type    : String,
            default : `
                <svg slot="handle" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="white" />
                    <rect opacity="0.4" width="2.69249" height="18.0722" rx="1.34624"
                        transform="matrix(-0.994153 -0.107976 0.101188 -0.994867 26.6371 29.27)" fill="#FFC400" />
                    <rect opacity="0.6" width="2.69249" height="18.0722" rx="1.34624"
                        transform="matrix(-0.994153 -0.107976 0.101188 -0.994867 20.6569 29.27)" fill="#FFC400" />
                    <rect opacity="0.8" width="2.69249" height="18.0722" rx="1.34624"
                        transform="matrix(-0.994153 -0.107976 0.101188 -0.994867 14.6766 29.27)" fill="#FFC400" />
                </svg>
            `,
        },

        dividerPosition : {
            type    : Number,
            default : 95,
        },
    },
});
</script>

<style lang="scss">
    .comparison {
        border-radius: 24px;
        outline: none;

        &__before,
        &__after {
            position: relative;
            margin: 0;

            figcaption {
                border-radius: 8px;
                background: $black;
                color: $white;
                font-size: 16px;
                font-weight: 600;
                line-height: 24px;
                margin: 0;
                padding: 8px 12px;
                position: absolute;
                left: 44px;
                top: 40px;

                @media (max-width: 620px) {
                    left: 15px;
                    top: 15px;
                    font-size: 12px;
                    line-height: 16px;
                }
            }


        }

        &__picture {
            object-fit: cover;
            min-height: 320px;
            width: 100%;
        }

        @media (max-width: 620px) {
            border-radius: 0;
            margin: 0 -20px;
        }
    }
</style>
