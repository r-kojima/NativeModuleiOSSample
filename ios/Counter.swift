//
//  Counter.swift
//  NativeModuleiOSSample
//
//  Created by Ryo Kojima on 2021/09/11.
//

import Foundation

enum NativeEvents: String, CaseIterable {
  case onIncrement
}

@objc(Counter)
class Counter: RCTEventEmitter {
  private var count = 0
  
  @objc
  func increment(_ num: Int) {
    count += num
    // ネイティブ側にイベントを送信する
    sendEvent(withName: NativeEvents.onIncrement.rawValue, body: ["count": count])
  }
 
  // ネイティブ側に送信するイベントの一覧
  override func supportedEvents() -> [String]! {
    return NativeEvents.allCases.map { (events) in events.rawValue }
  }
  
  // ネイティブ側から利用できる定数群
  @objc
  override func constantsToExport() -> [AnyHashable : Any]! {
    return ["initialCount": 0]
  }
  
  // JS側から依頼されたUI更新処理をネイティブ側のメインスレッドで実行する
  @objc
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
