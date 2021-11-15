import request from '@/utils/request'

export function XPoet() {
  return request({
    url: '/users/XPoet',
    method: 'get'
  })
}
