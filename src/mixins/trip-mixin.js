import axiosDb from '@/axios-database';

export default {
    data: function() {
        return { 
            trips: []
         }
    },
    methods: {
        getAllTrips() {
            axiosDb.get(`trips.json`)
            .then(res => { 
                res = res.data;
                for (const tripID of res) {
                    this.trips.push( {
                        tripID,
                        ...res[tripID]
                    })
                }
            })
            .catch(err => console.error(err))
        }

    }
}