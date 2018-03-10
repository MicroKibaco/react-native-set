> # React Native与Android原生通信交互详情

**(一)方式**

1. RCTDeviceEventEmitter 事件方式
2. Callback 回调方式
3. Promise

**(二)三种交互方式优缺点**

| 通信交互     | 优点 | 缺点   |
| :------- | ----: | :---: |
| RCTDeviceEventEmitter | 可任意时刻传递，Native主导控制 |  /   |
| Callback    | JS调用，Native返回   |  CallBack为异步操作，返回时机不确定   |
| Promise     | JS调用，Native返回    |  每次使用需要JS调用一次  |

**(三)使用三部曲**

- 定义**Module**类，extends **ReactContextBaseJavaModule**
    - 在Module类中，我们定义交互的方法，例如RN调用Native的方法，Native调用RN的方法等

- 定义**Package**类，extends ***ReactPackage***
    - 实现Package的**createNativeModules**方法，将Module实例添加到List

- 定义**Application**，extends ***ReactApplication***
    - 实现**getPackages**方法，将Package实例添加到getPackages下的List
    
