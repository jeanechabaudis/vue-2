Vue.component('message',{
	props: ['title', 'body'],
	data(){
		return{
			isVisble: true
		}
	},
	template: `
		<article class="message" v-show="isVisble">
			<div class="message-header">
				<p>{{ title }}</p>
				<button class="delete" @click="isVisble = false"></button>
			</div>
			<div class="message-body">
				{{ body }}
			</div>
		</article>
	`
})

new Vue({
	el: '#root'
})