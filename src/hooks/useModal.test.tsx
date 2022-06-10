import { renderHook, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useModal } from './useModal';

describe('Modal', () => {
  it('should be closed initially', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.isOpen).toBeFalsy();
  });

  it('should be able to open the modal', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.isOpen).toBeFalsy();

    act(() => {
      result.current.open();
    });

    expect(result.current.isOpen).toBeTruthy();
  });

  it('should be able to close the modal', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.open();
    });

    expect(result.current.isOpen).toBeTruthy();

    act(() => {
      result.current.close();
    });

    expect(result.current.isOpen).toBeFalsy();
  });
});
