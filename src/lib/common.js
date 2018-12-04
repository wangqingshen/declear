import Vue from 'vue'
import api from '../api/index'
let vue =new Vue({})

const GeoMap = {}

GeoMap.init=()=>{
    setTimeout(res=>{
        AMap.plugin(['AMap.Geolocation','AMap.Autocomplete','AMap.PlaceSearch'], function() {
            var geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 10000,          //超过10秒后停止定位，默认：5s
                buttonPosition:'RB',    //定位按钮的停靠位置
                buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
            })
            // _this.map.addControl(geolocation)
            geolocation.getCurrentPosition(function(status,res){
                console.log(status, res)
                // let curCity = ''
                // if(status=='complete'){
                //     _this.searchName = res.formattedAddress
                //     curCity = res.addressComponent.city
                // }else{
                //     _this.searchName = '北京天安门'
                //     curCity = '北京'
                // }
                // var autoOptions = {
                //   city: curCity,
                //   input: "tipinput"
                // }
                // _this.autocomplete= new AMap.Autocomplete(autoOptions)
                // _this.page = 1
                // _this.geoSeach()
                // AMap.event.addListener(_this.autocomplete, 'select', function(e){
                //   _this.searchName = e.poi.name
                //   _this.page = 1
                //   _this.geoSeach()
                // })
            })
        })
    },0)
}
GeoMap.init()

export {GeoMap}