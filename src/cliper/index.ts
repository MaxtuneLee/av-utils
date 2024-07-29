interface ClipMeta {
  readonly width: number;
  readonly height: number;
  duration: number;
}
export interface BaseClip {
  /**
   * 每种 clip 都要实现自己的 getTick 方法
   * @param time
   */
  getTick: (time: number) => Promise<{
    video: VideoFrame;
    audio: Float32Array[];
  }>;

  /**
   * 获取素材准备状态
   */
  ready: Promise<any>;

  /**
   * 素材的元信息
   */
  meta: ClipMeta;

  /**
   * 释放素材
   */
  release: () => void;

  /**
   * 克隆一个新的 clip
   */
  clone: () => <T extends BaseClip>(this: T) => T;
}
