import React from 'react'
import {ThemeConsumer} from './ThemeContext'
export default function ConsumerPage() {
    return (
        <div>
            <ThemeConsumer>
                {
                    ctx=><div className={ctx.themeColor}>qwqw</div>
                }
            </ThemeConsumer>
            
        </div>
    )
}

