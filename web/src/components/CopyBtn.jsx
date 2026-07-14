import { useState, useCallback } from 'react'
import { copyToClipboard } from '../utils/clipboard'

/**
 * Reusable copy button — works on dark terminals and light code blocks.
 * Pass className="light" for light-theme blocks.
 */
export default function CopyBtn({ text, className = '' }) {
  const [copied, setCopied] = useState(false)

  const handle = useCallback(() => {
    copyToClipboard(text, () => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }, [text])

  return (
    <button
      onClick={handle}
      className={`copy-btn ${className}`}
      aria-label="Copy to clipboard"
      style={copied ? { opacity: 1, color: '#2d6a4f' } : {}}
    >
      {copied ? 'copied!' : 'copy'}
    </button>
  )
}
