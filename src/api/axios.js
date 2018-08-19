import axios from 'axios';

let CancelToken=axios.CancelToken; //取消请求
let cancelFlag=true;

axios.default.timeout=20000;

axios.interceptors.request.use(config=>{
	if(cancelFlag){
		cancelFlag=false;
	}else{
		cancelToken: new CancelToken(c=>{
			//cancel=c;
		})
		//cancel();
	}
	return config
},error=>{
	return Promise.reject(error);
})

axios.interceptors.response.use(config=>{
	return config
},error=>{
	cancelFlag=true;
	return Promise.reject(error.message);
})

export function post(url,data,error){
	return new Promise((resolve,reject)=>{
		axios.post(url,data).then(res=>{
			resolve(res.data);
		},err=>{
			err=error?error:err;
		})
	})
}

export function get(url,data,error){
	return new Promise((resolve,reject)=>{
		axios.get(url,{
			params:data
		}).then(res=>{
			resolve(res.data);
		},err=>{
			err=error?error:err;
		})
	})
}