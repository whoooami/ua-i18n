<script>
	import Vue from 'vue';
  
    import { INIT } from "@/store/name.js";

	export default {
		onLaunch: async function(e) {
            console.log("onLaunch");
            this.setLocale();
		},
		
		onShow: async function(options) {
			console.log('App Show')
			// this.globalData.launchOption = options;
			console.log("app onShow:", JSON.stringify(options)); // 保存邀请人

			
		},
		onHide: function() {
			console.log('App Hide');
		},
      
        onError: function(err) {
            console.error("err:", err);
        },

		globalData: {
			getSystemInfo: function(cb) {
				var that = this;

				if (that.systemInfo) {
					typeof cb == "function" && cb(that.systemInfo);
				} else {
					uni.getSystemInfo({
						success: function(res) {
							that.systemInfo = res;
							typeof cb == "function" && cb(that.systemInfo);
						}
					});
				}
			},
            
			
			systemInfo: null,
		},
		methods: {
			async setLocale() {
			    // let lang = 'zh-CN';
			    try {
                    let lang = uni.getStorageSync(INIT.LANG);
			        if (!lang) {
			            const res = uni.getSystemInfoSync(); //获取本地记录的语言体，也可以获取系统的语言类型，看项目需求而定
                        lang = res.language;
                        lang = lang.indexOf("en")>=0? "en-US": lang;
			            // lang = res.language.replace("-", "");
                        uni.setStorageSync(INIT.LANG, lang);
			        }
			        this._i18n.locale = lang;
                    console.log("this._i18n.locale:", this._i18n.locale);
                    this.$store.commit(INIT.SET_LANG, lang);
			    } catch (e) {
			        console.error(e);
			    }
                // this._i18n.locale = 'zh-CN';
			},
          
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	
</style>
