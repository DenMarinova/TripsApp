import axiosDb from '@/axios-database';

export default {
    data: function () {
        return {
            trips: [],
            trip: {}
        }
    },
    methods: {
        getAllTrips() {
            axiosDb.get(`trips.json`)
                .then(res => {
                    const tripRes = res.data;

                    for (const tripID in tripRes) {
                        if (tripRes[tripID].description) {
                            const shortDescription = tripRes[tripID].description.substr(0, 70) + '...';
                            this.trips.push({
                                tripID,
                                shortDescription,
                                ...tripRes[tripID]
                            })
                        }
                    }
                }).catch(err => console.error(err))
        },
        async getTripById(id) {
            try {
                const res = await axiosDb.get(`trips/${id}.json`)
                this.trip = res.data
            } catch (err) {
                console.log(err);
            }
        },

        createTrip(payload) {
            axiosDb.post("/trips.json", payload)
                .then(() => {
                    this.$router.push("/list");
                })
                .catch(err => {
                    console.error(err);
                });
        },

        getForEdit(id) {
            return axiosDb.get(`trips/${id}.json`)
        },

        editTrip(data, id) {
            axiosDb.patch(`trips/${id}.json`, data)
                .then(() => {
                    this.$router.push(`/list/details/${id}`);
                })
                .catch(err => console.error(err));
        },

        deleteTrip(id) {
            axiosDb.delete(`trips/${id}.json`, {_method: 'delete'}).then(res => {
                console.log(res);
                this.$router.push(`/list`);
            })
                .catch(err => console.error(err))
        }
    },

    computed: {
        getDataForEdit() {
            return this.trip;
        }
    }
}