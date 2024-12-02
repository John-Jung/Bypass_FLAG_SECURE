Java.perform(function() {
    // Activity class 후킹
    var Activity = Java.use("android.app.Activity");
    
    // getWindow 메소드 후킹
    Activity.getWindow.implementation = function() {
        var window = this.getWindow();
        
        // 현재 Activity 정보 출력
        console.log("[*] Current Activity:", this.getClass().getName());
        
        if (window != null) {
            // 현재 윈도우 플래그 확인
            var flags = window.getAttributes().flags.value;
            console.log("[*] Current window flags:", flags);
            
            // Secure 플래그 확인
            if ((flags & 0x2000) == 0x2000) {
                console.log("[+] FLAG_SECURE is set");
            } else {
                console.log("[-] FLAG_SECURE is not set");
            }
        }
        
        return window;
    };
    
    // WindowManager.LayoutParams.FLAG_SECURE 설정 모니터링
    var WindowManager = Java.use("android.view.WindowManager$LayoutParams");
    
    Java.use("android.view.Window").setFlags.implementation = function(flags, mask) {
        if ((flags & WindowManager.FLAG_SECURE.value) == WindowManager.FLAG_SECURE.value) {
            console.log("[*] FLAG_SECURE is being set");
            console.log("[*] Stack trace:");
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        }
        return this.setFlags(flags, mask);
    };
});

