import { describe, expect, it } from 'vitest'
import { failure, Failure, success, Success } from '../../../../../source/modules/shared/helpers'

describe('Result Pattern', () => {

    it('should correctly store the value and indicate that it failed', () => {
        
        const result = failure(new Error())
        
        expect(result).toBeInstanceOf(Failure)
        expect(result.failed()).toBe(true)
        expect(result.successfully()).toBe(false)
        expect(result.value).toBeInstanceOf(Error)

    })

    it('should correctly store the value and indicate that it was successful', () => {

        const result = success(123)
        
        expect(result).toBeInstanceOf(Success)
        expect(result.failed()).toBe(false)
        expect(result.successfully()).toBe(true)
        expect(result.value).toBe(123)

    })

    it('should correctly infer types', () => {
        
        const first_result: Failure<Error, number> = new Failure(new Error())
        const second_result: Success<Error, number> = new Success(123)
        
        expect(first_result.value).toBeInstanceOf(Error)
        expect(second_result.value).toBe(123)
        
    })

})