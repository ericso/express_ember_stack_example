Todos.Store = DS.Store.extend({
	revision: 12,
	adapter: 'Todos.LSAdapter'
});

// https://github.com/rpflorence/ember-localstorage-adapter
Todos.LSAdapter = DS.LSAdapter.extend({
	namespace: 'todos-emberjs'
});