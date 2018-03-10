package com.rnandroidcallback.bridge;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * 通信 CommModule 类
 */

public class CommModule extends ReactContextBaseJavaModule {

    private ReactApplicationContext mContext;
    private static final String MODULE_NAME = "CommModule";
    private static final String EVENT_NAME = "nativeCallRn";

    public CommModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mContext = reactContext;
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    /**
     * Rn调用原生方法
     */

    @ReactMethod
    private void rnCallNative(String msg) {
        Toast.makeText(mContext, msg, Toast.LENGTH_SHORT).show();
    }


    /**
     * RCTDeviceEventEmitter方式
     */
    private void nativeCallRn(String msg) {

        mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(EVENT_NAME, msg);

    }

    /**
     * Callback 方式
     * rn调用Native,并获取返回值
     */

    @ReactMethod
    public void rnCallNativeFromCallback(String msg, Callback callback) {

        String result = "处理结果: " + msg;
        callback.invoke(result);

    }

    /**
     * Promise
     */
    @ReactMethod
    private void rnCallNativeFromPromise(String msg, Promise promise) {
        String result = "处理结果: " + msg;
        promise.resolve(result);
    }


}
