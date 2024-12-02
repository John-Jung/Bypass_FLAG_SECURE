Java.perform(function() {
    console.log("[*] Starting FLAG_SECURE bypass script");
    
    // BaseViewActivity에서 FLAG_SECURE를 설정하는 메소드를 후킹
    var BaseViewActivity = Java.use("com.korail.talk.view.base.BaseViewActivity");
    BaseViewActivity.K.implementation = function() {
        console.log("[*] Intercepted FLAG_SECURE setting in BaseViewActivity.K()");
        // 원래 메소드를 호출하지 않고 리턴
        return;
    };
    
    // 추가적인 보호를 위해 Window.setFlags도 후킹
    var Window = Java.use("android.view.Window");
    Window.setFlags.implementation = function(flags, mask) {
        // FLAG_SECURE(0x2000)를 제거
        flags &= ~0x2000;
        mask &= ~0x2000;
        
        console.log("[*] Removed FLAG_SECURE from window flags");
        
        // 수정된 플래그로 원래 메소드 호출
        return this.setFlags(flags, mask);
    };
    
    // addFlags 메소드도 후킹
    Window.addFlags.implementation = function(flags) {
        // FLAG_SECURE 제거
        flags &= ~0x2000;
        console.log("[*] Removed FLAG_SECURE from addFlags");
        
        return this.addFlags(flags);
    };
});