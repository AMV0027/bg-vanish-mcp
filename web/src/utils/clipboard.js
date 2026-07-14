/**
 * Copy text to clipboard with a visual confirmation callback.
 * @param {string} text
 * @param {(success: boolean) => void} onDone
 */
export async function copyToClipboard(text, onDone) {
  try {
    await navigator.clipboard.writeText(text.trim())
    onDone(true)
  } catch {
    // Fallback for non-secure contexts
    const ta = document.createElement('textarea')
    ta.value = text.trim()
    ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    onDone(true)
  }
}
