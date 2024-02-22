import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode, type ImgHTMLAttributes } from 'vue'

export declare const imageProps: Record<keyof ImageProps, any>

export type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export interface ImageProps extends BasicAttributes {
  src?: string
  fit?: ImageFit
  title?: string
  alt?: string
  referrerpolicy?: ImgHTMLAttributes['referrerpolicy']
  width?: string | number
  height?: string | number
  radius?: string | number
  loading?: string
  error?: string
  lazy?: boolean
  ripple?: boolean
  block?: boolean
  onClick?: ListenerProp<(e: Event) => void>
  onLoad?: ListenerProp<(e: Event) => void>
  onError?: ListenerProp<(e: Event) => void>
}

export class Image extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<ImageProps>

  $props: ImageProps

  $slots: {
    error(): VNode[]
  }
}

export class _ImageComponent extends Image {}
