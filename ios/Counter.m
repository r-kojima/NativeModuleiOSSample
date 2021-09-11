//
//  Counter.m
//  NativeModuleiOSSample
//
//  Created by Ryo Kojima on 2021/09/11.
//

#import <Foundation/Foundation.h>
#import"React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(Counter, RCTEventEmitter)
  RCT_EXTERN_METHOD(
      increment: (NSInteger)num
  )
@end
