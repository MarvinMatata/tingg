<template>
    <div>
       <div class="container my-12 mx-auto px-4 md:px-12">
           <p class="flex-auto text-4xl text-center m-2 ">
                Trending Groups
            </p>     
        </div>
        <div>
            <form class="flex-auto text-md text-center m-2 ">
                <label>
                    Search:
                    <input v-model="tag" type="text" class=" border-2">
                </label>
                <button type="submit" class="go-button " @click.prevent="search">Search</button>
            </form>
            <p v-if="loading">
                Loading...
            </p>
            <ul v-else>
                <ImageCard
                    v-for="image in images"
                    :key="image.id"
                    :image="image" />
                
                <li v-for="image in images" :key="image.id">
                    <img :src="image.url_n" :alt="image.title">
                    <div>
                    <p v-if="image.title">{{image.title}}</p>
                    <p v-else>No Title Found</p>
                    <p>By {{image.ownername}}</p>
                    <section>
                        <p>{{image.datetaken}}</p>
                        <p>Views: {{image.views}}</p>
                    </section>
                    </div>
                </li>
                </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'app_cards',

    data: function() {
        return {
            loading: false,
            tag: '',
            images: []
            }
        },
        methods: {
            search() {
            this.loading = true;
            this.fetchImages()
                .then((response) => {
                this.images = response.data.photos.photo;
                this.loading = false;
                })
            },
            fetchImages() {
            return axios({
                method: 'get',
                url: 'https://api.flickr.com/services/rest',
                params: {
                method: 'flickr.photos.search',
                api_key: 'f56c34a04ed146a68150e8856ce7190e',
                tags: this.tag,
                extras: 'url_n, owner_name, date_taken, views',
                page: 1,
                format: 'json',
                nojsoncallback: 1,
                per_page: 30,
                }
            })
    },
    props: {
        msg: String
    },
}
}
</script>
<style scoped>

</style>
