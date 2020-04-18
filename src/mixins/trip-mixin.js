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
                const tripRes = res.data;
                for (const tripID in tripRes) {
                    this.trips.push( {
                        tripID,
                        ...tripRes[tripID]
                    })
                }
            })
            .catch(err => console.error(err))
        } 
    }
}