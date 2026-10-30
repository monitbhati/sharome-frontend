import { useEffect } from 'react'

/* Sets the browser tab title for a page. */
export function usePageTitle(title) {
  useEffect(() => { document.title = title ? `${title} | SHAROME` : 'SHAROME | Custom software studio' }, [title])
}
