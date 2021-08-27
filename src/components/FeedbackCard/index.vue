<template>
  <div
    @click="handleToggle"
    class="flex flex-col px-8 py-6 rounded cursor-pointer bg-brand-gray">
    <div class="flex items-center justify-between w-full mb-8">
      <badge :type="feedback.type" />
      <span class="font-regular text-brand-graydark">
        {{ feedback.createdAt }}
      </span>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nam in officiis accusamus illo cumque, facere, veritatis velit dolore natus amet? Cupiditate labore non dolorum voluptate quas. Sequi, ipsam totam.</p>
  </div>
</template>

<script>
import Badge from './Badge'

export default {
  components: {
    Badge
  },
  props: {
    feedback: { type: Object, required: true }
  },
  setup () {
    function handleToggle () {

    }

    return {
      handleToggle
    }
  }
}
</script>
