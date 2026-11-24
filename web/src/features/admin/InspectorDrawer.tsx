'use client'

import React, { useState } from 'react'
import {
  X,
  Sparkles,
  Sliders,
  Send,
  CheckCircle2,
  Palette,
  Square,
  Circle,
  Eye,
  EyeOff,
  Layers,
  HelpCircle,
} from 'lucide-react'
import type {
  SiteDesignConfig,
  SelectedElementInfo,
  ChatMessage,
  ButtonRadius,
  ColorTheme,
  CardStyle,
} from './types'

interface InspectorDrawerProps {
  isOpen: boolean
  onClose: () => void
  selectedElement: SelectedElementInfo | null
  config: SiteDesignConfig
  onChangeConfig: (newConfig: Partial<SiteDesignConfig>) => void
}

export function InspectorDrawer({
  isOpen,
  onClose,
  selectedElement,
  config,
  onChangeConfig,
}: InspectorDrawerProps) {
  const [activeTab, setActiveTab] = useState<'controls' | 'chat'>('controls')
  const [chatInput, setChatInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'assistant',
      text: 'Hello! I am your LeSeft Design & UI Assistant. Click any element on the preview to inspect it, or describe a change below (e.g. "make buttons pill-shaped", "switch to emerald theme", or "add elevated shadow to cards").',
      timestamp: 'Just now',
    },
  ])
  const [isTyping, setIsTyping] = useState(false)

  if (!isOpen) return null

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || chatInput
    if (!text.trim()) return

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    setMessages((prev) => [...prev, userMsg])
    if (!textToSend) setChatInput('')
    setIsTyping(true)

    // Simulate AI understanding design prompt and applying changes
    setTimeout(() => {
      const lower = text.toLowerCase()
      let changeDescription = ''
      const updates: Partial<SiteDesignConfig> = {}

      // Detect button radius
      if (lower.includes('pill') || lower.includes('capsule')) {
        updates.buttonRadius = 'pill'
        changeDescription += '• Set button corners to Pill (rounded-full)\n'
      } else if (lower.includes('sharp') || lower.includes('square') || lower.includes('box')) {
        updates.buttonRadius = 'sharp'
        changeDescription += '• Set button corners to Sharp (0px)\n'
      } else if (lower.includes('round') || lower.includes('smooth')) {
        updates.buttonRadius = 'rounded'
        changeDescription += '• Set button corners to Rounded (16px)\n'
      }

      // Detect color theme
      if (lower.includes('emerald') || lower.includes('green') || lower.includes('infrastructure')) {
        updates.colorTheme = 'emerald'
        changeDescription += '• Switched primary palette to Emerald Infrastructure\n'
      } else if (lower.includes('gold') || lower.includes('amber') || lower.includes('prestige')) {
        updates.colorTheme = 'gold'
        changeDescription += '• Switched primary palette to Royal Gold Accent\n'
      } else if (lower.includes('navy') || lower.includes('blue') || lower.includes('corporate')) {
        updates.colorTheme = 'navy'
        changeDescription += '• Switched primary palette to LeSeft Corporate Navy\n'
      } else if (lower.includes('slate') || lower.includes('gray') || lower.includes('minimal')) {
        updates.colorTheme = 'slate'
        changeDescription += '• Switched primary palette to Minimalist Slate\n'
      }

      // Detect card style
      if (lower.includes('glass') || lower.includes('blur')) {
        updates.cardStyle = 'glass'
        changeDescription += '• Changed card layout to Frosted Glassmorphism\n'
      } else if (lower.includes('elevated') || lower.includes('shadow') || lower.includes('deep')) {
        updates.cardStyle = 'elevated'
        changeDescription += '• Added Elevated Drop Shadow to cards\n'
      } else if (lower.includes('border') || lower.includes('outline')) {
        updates.cardStyle = 'border'
        changeDescription += '• Applied crisp corporate border outline to cards\n'
      } else if (lower.includes('flat')) {
        updates.cardStyle = 'flat'
        changeDescription += '• Switched to Flat card styling\n'
      }

      // Detect visibility
      if (lower.includes('hide cta') || lower.includes('remove button')) {
        updates.hiddenElements = { ...config.hiddenElements, heroCta: true }
        changeDescription += '• Hidden Hero CTA button\n'
      } else if (lower.includes('show cta') || lower.includes('enable button')) {
        updates.hiddenElements = { ...config.hiddenElements, heroCta: false }
        changeDescription += '• Visible Hero CTA button\n'
      }

      if (Object.keys(updates).length > 0) {
        onChangeConfig(updates)
      }

      const aiReply: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: changeDescription
          ? `I have updated your live website canvas:\n${changeDescription}\nYou can see the changes reflected immediately on the live preview.`
          : `I analyzed your request: "${text}". Try giving specific directions like "make the button corners pill-shaped", "change the theme to emerald", or "add elevated shadows to cards".`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        appliedChange: changeDescription || undefined,
      }

      setIsTyping(false)
      setMessages((prev) => [...prev, aiReply])
    }, 700)
  }

  return (
    <aside className="w-full lg:w-96 bg-white border-l border-slate-200 flex flex-col h-full shadow-xl z-30 transition-all duration-300">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">
            🎨
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Element Customizer & AI
            </h3>
            <p className="text-[11px] text-slate-500 truncate max-w-[200px]">
              {selectedElement ? `Selected: ${selectedElement.name}` : 'Global Site Theme'}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 p-1.5 bg-slate-100/80 border-b border-slate-200 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('controls')}
          className={`flex items-center justify-center gap-1.5 py-2 rounded-md transition-all ${
            activeTab === 'controls'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Visual Controls</span>
        </button>

        <button
          onClick={() => setActiveTab('chat')}
          className={`flex items-center justify-center gap-1.5 py-2 rounded-md transition-all relative ${
            activeTab === 'chat'
              ? 'bg-white text-sky-800 shadow-xs'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>AI Change Chat</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {activeTab === 'controls' ? (
          <>
            {/* Corner Radius Controls */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Square className="w-3.5 h-3.5 text-sky-600" />
                  <span>Button Corner Radius</span>
                </label>
                <span className="text-[11px] font-semibold text-slate-400 uppercase">
                  {config.buttonRadius}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {(
                  [
                    { id: 'sharp', label: 'Sharp (0px)', class: 'rounded-none' },
                    { id: 'subtle', label: 'Subtle (6px)', class: 'rounded-md' },
                    { id: 'rounded', label: 'Rounded (12px)', class: 'rounded-xl' },
                    { id: 'pill', label: 'Full Pill (99px)', class: 'rounded-full' },
                  ] as const
                ).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onChangeConfig({ buttonRadius: item.id as ButtonRadius })}
                    className={`py-2 px-3 text-xs font-medium border flex items-center justify-between transition-all ${
                      config.buttonRadius === item.id
                        ? 'border-sky-600 bg-sky-50/70 text-sky-900 font-bold shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    } ${item.class}`}
                  >
                    <span>{item.label}</span>
                    {config.buttonRadius === item.id && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Color Palette */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Corporate Color Theme</span>
                </label>
                <span className="text-[11px] font-semibold text-slate-400 uppercase">
                  {config.colorTheme}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {(
                  [
                    {
                      id: 'navy',
                      label: 'LeSeft Navy',
                      desc: 'Corporate Strategic',
                      bg: 'bg-slate-900',
                      accent: 'bg-sky-500',
                    },
                    {
                      id: 'emerald',
                      label: 'Infrastructure',
                      desc: 'Emerald & Gold',
                      bg: 'bg-emerald-950',
                      accent: 'bg-emerald-500',
                    },
                    {
                      id: 'gold',
                      label: 'Prestige Gold',
                      desc: 'Royal Executive',
                      bg: 'bg-amber-950',
                      accent: 'bg-amber-500',
                    },
                    {
                      id: 'slate',
                      label: 'Modern Slate',
                      desc: 'Minimal High-Tech',
                      bg: 'bg-slate-800',
                      accent: 'bg-slate-400',
                    },
                  ] as const
                ).map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => onChangeConfig({ colorTheme: theme.id as ColorTheme })}
                    className={`p-2.5 rounded-lg border text-left flex items-start gap-2.5 transition-all ${
                      config.colorTheme === theme.id
                        ? 'border-sky-600 bg-sky-50/50 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex -space-x-1.5 mt-0.5">
                      <div className={`w-4 h-4 rounded-full ${theme.bg} border border-white`} />
                      <div className={`w-4 h-4 rounded-full ${theme.accent} border border-white`} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{theme.label}</p>
                      <p className="text-[10px] text-slate-500">{theme.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Card Styles */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-600" />
                  <span>Card Geometry & Shadow</span>
                </label>
                <span className="text-[11px] font-semibold text-slate-400 uppercase">
                  {config.cardStyle}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {(
                  [
                    { id: 'border', label: 'Outline Border' },
                    { id: 'elevated', label: 'Elevated Drop Shadow' },
                    { id: 'flat', label: 'Flat Minimal' },
                    { id: 'glass', label: 'Frosted Glass' },
                  ] as const
                ).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onChangeConfig({ cardStyle: item.id as CardStyle })}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-left flex items-center justify-between transition-all ${
                      config.cardStyle === item.id
                        ? 'border-sky-600 bg-sky-50/70 text-sky-950 font-bold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {config.cardStyle === item.id && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Element Visibility Toggles */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-indigo-600" />
                <span>Element Visibility Toggles</span>
              </label>

              <div className="space-y-2">
                {[
                  {
                    key: 'heroCta',
                    label: 'Hero CTA Button ("Explore Projects")',
                    hidden: config.hiddenElements.heroCta,
                  },
                  {
                    key: 'statusBanner',
                    label: 'Top System Status Banner',
                    hidden: config.hiddenElements.statusBanner,
                  },
                  {
                    key: 'emailDemo',
                    label: 'Email Dispatcher Console',
                    hidden: config.hiddenElements.emailDemo,
                  },
                ].map((elem) => (
                  <div
                    key={elem.key}
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200"
                  >
                    <span className="text-xs font-medium text-slate-700">{elem.label}</span>
                    <button
                      onClick={() =>
                        onChangeConfig({
                          hiddenElements: {
                            ...config.hiddenElements,
                            [elem.key]: !elem.hidden,
                          },
                        })
                      }
                      className={`p-1.5 rounded-md text-xs font-semibold flex items-center gap-1 transition-all ${
                        elem.hidden
                          ? 'bg-red-50 text-red-700 border border-red-200'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}
                    >
                      {elem.hidden ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>Hidden</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>Visible</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* AI Chat Tab */
          <div className="flex flex-col h-full space-y-4">
            {/* Quick Prompt Suggestions */}
            <div className="space-y-1.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Quick Prompts
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Make buttons pill-shaped',
                  'Switch to emerald theme',
                  'Add elevated shadow to cards',
                  'Make buttons sharp & corporate',
                  'Hide the Hero CTA button',
                ].map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSendMessage(prompt)}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200 border border-slate-200 text-slate-700 transition-all cursor-pointer"
                  >
                    ✨ {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-1 space-y-3 overflow-y-auto max-h-[380px] p-2 bg-slate-50 rounded-lg border border-slate-200 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-xl whitespace-pre-line leading-relaxed shadow-xs ${
                      msg.sender === 'user'
                        ? 'bg-slate-900 text-white rounded-br-none'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.timestamp}</span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 text-xs text-sky-700 bg-white p-2 rounded-lg border border-slate-200 w-fit">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>Applying design modifications...</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Chat Input Bar (Only visible on chat tab) */}
      {activeTab === 'chat' && (
        <div className="p-3 border-t border-slate-200 bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendMessage()
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Describe a design change..."
              className="flex-1 text-xs border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={!chatInput.trim()}
              className="p-2 bg-slate-900 text-white rounded-lg hover:bg-sky-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </aside>
  )
}
