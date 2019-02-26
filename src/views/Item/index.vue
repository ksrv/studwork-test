<template>
  <page :title="current.name" :pending="pending">
    <ul class="info">
      <li v-for="(value, field) in current" :key="field">
        <span v-if="showField(field)" class="info-item">
          <span class="_field">{{ fieldName(field) }}</span>
          <span class="_value">{{ fieldValue(field, value) }}</span>
        </span>
      </li>
    </ul>
  </page>
</template>


<script>
import { toLongLocaleDate } from '@/filters';
import { get, call } from 'vuex-pathify';

export default {
  name: 'Item',

  props: {
    id: {
      type: [String, Number],
      default: '',
    },
  },

  computed: {
    pending: get('Starships/loading_current'),
    current: get('Starships/current'),
  },

  methods: {
    callLoadById: call('Starships/loadById'),

    showField (field) {
      switch (field) {
        case 'films':
          return false;
        default: 
          return true;
      }
    },

    fieldName(field) {
      return {
        name: 'Название',
        model: 'Модель',
        manufacturer: 'Производитель',
        cost_in_credits: 'Цена',
        length: 'Длина',
        max_atmosphering_speed: 'Макисмальная скорость в атмосфере',
        crew: 'Количество членов экипажа',
        passengers: 'Количество пассажиров',
        cargo_capacity: 'Грузопоъемность',
        consumables: 'Срок эксплуатации',
        hyperdrive_rating: 'Рейтинг',
        MGLT: 'MGLT',
        starship_class: 'Класс корабля',
        pilots: 'Пилоты',
        films: 'Чё где посмотреть',
        created: 'Построен',
        edited: 'Отремонтирован',
        url: 'Источник информации',
      }[field];
    },

    fieldValue(field, value) {
      if (Array.isArray(value)) {
        if (value.length == 0) return ' - ';
        return value.join(' ');
      }
      if (['created', 'edited'].includes(field)) {
        return toLongLocaleDate(value);
      }
      return value;
    },

    async load() {
      try {
        await this.callLoadById(this.id);
      } catch (error) {
        this.$router.push({ name: 'Error404' });
      }
    },
  },

  created() {
    this.load();
  },
};
</script>


<style lang="scss">
.info {
  display: block;
  width: 50%;

  &-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span {
      width: 40%;
      &._field {
        font-weight: bold;
      }
      &._value {

      }
    }
  }
}
</style>
