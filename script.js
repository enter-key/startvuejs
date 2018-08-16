const UsersList = {
  template: '#usersList',
  props: {
    list: {
      type: Array,
      required: true
    },
    total: {
      type: Number,
      default: 5
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  methods: {
    removeUser: function(id){
      this.$emit('click', id)
    }
  }
};

// ================

const UserEdit = {
  template: '#userEdit',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  methods: {
    editUser: function(id){
      this.$emit('click', id)
    }
  }
};

// ================

window.app = new Vue({
  el: '#app',
  components: {
    'users-list': UsersList,
    'user-edit': UserEdit
  },
  data: function() {
    return {
      showListUsers: true,
      users: [],
      temp: 'тест',
      selectedNum: 5,
      numbers: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    usersLength: function() {
      return this.users.length;
    },
    tooltipToggleListUsers: function() {
      return this.showListUsers ? 'Скрыть список' : 'Показать список';
    },
    user: function() {
      return this.users[0]
    }
  },
  mounted: function() {
    this.loadUsers();
  },
  watch: {
    users: {
      handler: function(value, oldValue) {
        if (oldValue.length == 0) {
          console.log('data is loaded');
        }
        else {
          console.log('data is changed');
        }
      }
    }
  },
  methods: {
    removeUserFromList: function(id) {
      this.users = this.users.filter(item => item.id != id);
    },
    editUserData: function(user) {
      console.log(user);
      Vue.set(this.users, user.id, user);
      console.log(this.users);
    },
    change: function(){
      this.temp = 'copy';
    },
    loadUsers: function() {
      this.users = [
        {
          id: 0,
          firstName: 'ирина',
          lastName: 'петрова',
          middleName: 'васильевна',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0cS8xh8ytZyJKcrvUow9REX8uGY1dvVcABFEll6mh6Nc8ZzA'
        },
        {
          id: 1,
          firstName: 'василий',
          lastName: 'сидоров',
          middleName: 'иванович',
          image: 'https://www.inmoment.ru/img/houseplants.jpg'
        },
        {
          id: 2,
          firstName: 'иван',
          lastName: 'васильев',
          middleName: 'петрович',
          image: ''
        },
        {
          id: 3,
          firstName: 'анна',
          lastName: 'иванова',
          middleName: 'васильевна',
          image: ''
        },
        {
          id: 4,
          firstName: 'мария',
          lastName: 'ильинова',
          middleName: 'ивановна',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQom0wBFmBf4f0rEDgnOsnerSpmqcVlq51P30N84wMFnf1OF5Op0g'
        }
      ]
    },
    toggleListUsers: function() {
      this.showListUsers = !this.showListUsers;
    }
  },
});