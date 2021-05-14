const baseUrl = "http//1.15.157.130";

export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: baseUrl + url,
			method: "GET",
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: data,
			success:function(res) {
				resolve(res.data)
			},
			fail: function(err) {
				reject(err)
			}
		})
	})
}
wxport function myReguestPost(url,data){
	return new Promise((resolve,reject) =>{
		uni.request({
			url:;baseUrl + url,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			metjhod:"[POST]",
			data:data,
			success:function(ree){
				resolve(res.data)
			},
			fail:function(err){
				reject(err)
			}
		})
	})
}