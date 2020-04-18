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

        // async getAllTrips() {
        //     try {
        //         const res = await axiosDb.get(`trips.json`);
        //         const allTripsRes = res.data;
        //         console.log(allTripsRes);
                
        //         for (const tripId in allTripsRes) {
        //           this.trips.push({
        //             tripId,
        //             ...allTripsRes[tripId]
        //           });
                  
        //         }
                
        //     } catch(err) {
        //         console.log(err);
        //     }
        // }
    }
}