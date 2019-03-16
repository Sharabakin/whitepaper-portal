module.exports = {
	block: 'page',
	title: 'Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' }},
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' }},
		{ elem: 'css', url: 'starter-kit.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'starter-kit.min.js' }],
	mods: { theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-default', space: 'default', breakpoint: 'default', size: 'default', gap: 'small', menu: 'default', font: 'nitti' }
		},
		{
			block: 'component',
			mods: { whitepaper: 'default' }
		}
	],
	content: [
		{
			block: 'tpl-layout',
			mix: { block: 'decorator',mods: { 'space-v': 'xxxxxxl' }},
			attrs: {
				'style': 'background: var(--color-bg-ghost)'
			},
			content: [
				{
					elem: 'content',
					content: [
						{
							elem: 'container',
							elemMods: { 'size': 'm', 'align': 'center' },
							content: [

								/* Heading */
								{
									elem: 'section',
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '12', 'm-columns': '12' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '12', 'm-col': '6' },
													content: [
														{
															block: 'text',
															mods: { weight: 'bold' },
															attrs: { 'style': 'font-size: 72px;' },
															content: 'Starter KIT'
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '12', 'm-col': '6' },
													content: [
														{
															block: 'colorizer',
															content: [
																{
																	elem: 'color',
																	elemMods: { view: 'whitepaper', state: 'active' }
																},
																{
																	elem: 'color',
																	elemMods: { view: 'megafon' }
																},
																{
																	elem: 'color',
																	elemMods: { view: 'mts' }
																}
															]
														}
													]
												}
											]
										}
									]
								},
								/* /Heading */

								/* Tarif */
								{
									elem: 'section',
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'tariff',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-default' }},
																{ block: 'component', mods: { whitepaper: 'default' }},
																{ block: 'pt-card' }
															],
															content: [
																{
																	elem: 'content',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			elem: 'type',
																			mix: [
																				{ block: 'text', mods: { view: 'primary', size: 'xxl', weight: 'bold', align: 'center' }},
																				{ block: 'decorator', mods: { 'indent-b': 'xxs' }}
																			],
																			content: 'Light'
																		},
																		{
																			elem: 'type',
																			mix: [
																				{ block: 'text', mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' }},
																				{ block: 'decorator', mods: { 'indent-b': 'l' }}
																			],
																			content: 'For large companies'
																		},
																		{
																			elem: 'sale',
																			mix: [
																				{ block: 'text', mods: { view: 'primary', align: 'center', weight: 'black', size: 'xxxxl' }},
																				{ block: 'decorator', mods: { 'indent-b': 'l' }}
																			],
																			content: '$22'
																		},
																		{
																			elem: 'assets',
																			content: [
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'part', size: 's', view: 'primary', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-brand' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', font: 'sans' },
																											content: '50 presentations/month'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'wait-2', size: 's', view: 'primary', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-brand' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', font: 'sans' },
																											content: '5 house of free support'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'statistic', size: 's', view: 'primary', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-brand' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', font: 'sans'  },
																											content: '10 campaigns/month'
																										}
																									]
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'footer',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			block: 'button',
																			mods: { theme: 'islands', size: 'l', width: 'available', view: 'action' },
																			text: 'Choose month plan'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'tariff',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-brand' }},
																{ block: 'component', mods: { whitepaper: 'brand' }},
																{ block: 'pt-card' }
															],
															content: [
																{
																	elem: 'content',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			elem: 'type',
																			mix: [
																				{ block: 'text', mods: { view: 'primary', size: 'xxl', weight: 'bold', align: 'center' }},
																				{ block: 'decorator', mods: { 'indent-b': 'xxs' }}
																			],
																			content: 'Standard'
																		},
																		{
																			elem: 'type',
																			mix: [
																				{ block: 'text', mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' }},
																				{ block: 'decorator', mods: { 'indent-b': 'l' }}
																			],
																			content: 'For large companies'
																		},
																		{
																			elem: 'sale',
																			mix: [
																				{ block: 'text', mods: { view: 'primary', align: 'center', weight: 'black', size: 'xxxxl' }},
																				{ block: 'decorator', mods: { 'indent-b': 'l' }}
																			],
																			content: '$66'
																		},
																		{
																			elem: 'assets',
																			content: [
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'part', size: 's', view: 'brand', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-default' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', font: 'sans' },
																											content: '50 presentations/month'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'wait-2', size: 's', view: 'brand', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-default' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', font: 'sans' },
																											content: '5 house of free support'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'statistic', size: 's', view: 'brand', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-default' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', font: 'sans',  },
																											content: '10 campaigns/month'
																										}
																									]
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'footer',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			block: 'button',
																			mods: { theme: 'islands', size: 'l', width: 'available', view: 'action' },
																			text: 'Choose month plan'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'tariff',
															mods: { view: 'image' },
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
																{ block: 'pt-card' }
															],
															content: [
																{
																	block: 'image',
																	mix: { block: 'pt-card', elem: 'image', elemMods: { size: 'cover' }},
																	url: '/assets/starter-kit/premium.png'
																},
																{
																	elem: 'content',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			elem: 'type',
																			mix: [
																				{ block: 'text', mods: { view: 'primary', size: 'xxl', weight: 'bold', align: 'center' }},
																				{ block: 'decorator', mods: { 'indent-b': 'xxs' }}
																			],
																			content: 'Premium'
																		},
																		{
																			elem: 'type',
																			mix: [
																				{ block: 'text', mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' }},
																				{ block: 'decorator', mods: { 'indent-b': 'l' }}
																			],
																			content: 'For large companies'
																		},
																		{
																			elem: 'sale',
																			mix: [
																				{ block: 'text', mods: { view: 'primary', align: 'center', weight: 'black', size: 'xxxxl' }},
																				{ block: 'decorator', mods: { 'indent-b': 'l' }}
																			],
																			content: '$99'
																		},
																		{
																			elem: 'assets',
																			content: [
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'part', size: 's', view: 'primary', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-default' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', font: 'sans' },
																											content: '50 presentations/month'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'wait-2', size: 's', view: 'primary', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-default' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', font: 'sans' },
																											content: '5 house of free support'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'statistic', size: 's', view: 'primary', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-default' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', font: 'sans' },
																											content: '10 campaigns/month'
																										}
																									]
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'footer',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			block: 'button',
																			mods: { theme: 'islands', size: 'l', width: 'available', view: 'action' },
																			text: 'Choose month plan'
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								},
								/* /Tarif */

								/* Media */
								{
									elem: 'section',
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'media',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
																{ block: 'pt-card', mods: { view: 'default' }},
															],
															content: [
																{
																	elem: 'video',
																	mix: { block: 'pt-card', elem: 'content' },
																	content: [
																		{
																			elem: 'image',
																			mix: { block: 'pt-card', elem: 'image' },
																			attrs: { 'style': 'max-height: 340px; overflow: hidden' },
																			content: [
																				{
																					block: 'image',
																					attrs: { style: 'width: 100%' },
																					url: '/assets/starter-kit/fallon.png',
																				}
																			]
																		},
																		{
																			elem: 'play',
																			mix: [
																				{ block: 'theme', mods: { color: 'whitepaper-default' }},
																				{ block: 'pt-card', elem: 'play' }
																			]
																		},
																		{
																			block: 'text',
																			mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'xl' }},
																			mods: { view: 'primary', size: 'xxxl', weight: 'bold' },
																			content: [
																				{
																					elem: 'wrap',
																					content: {
																						html: 'Mad Lib Theater&nbsp;with John&nbsp;Cena'
																					}
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'footer',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl', distribute: 'between' }},
																	content: [
																		{
																				block: 'pt-icon-plus',
																				mods: { 'vertical-align': 'center' },
																				content: [
																				{
																					block: 'brand-logo',
																					mods: { 'name': 'ustwo', size: 's' },
																					mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 'xs' }, },
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', font: 'sans' },
																							content: 'The Tonight Show…'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', font: 'mono' },
																			content: [
																				{
																					block: 'text',
																					mods: { weight: 'bold', display: 'inline' },
																					content: '512K '
																				},
																				'views'
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'media',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-default' }},
																{ block: 'component', mods: { whitepaper: 'default' }},
																{ block: 'pt-card', mods: { view: 'default' } },
															],
															content: [
																{
																	elem: 'article-author',
																	mix: [
																		{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																		{ block: 'component', mods: { whitepaper: 'inverse' }},
																		{ block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'xl' }}
																	],
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 's' },
																					mix: { block: 'avatar' },
																					content: [
																						{
																							block: 'avatar',
																							elem: 'photo',
																							elemMods: { size: 's'},
																							content: [
																								{
																									block: 'image',
																									width: 40,
																									url: '/assets/starter-kit/Tory Turk.jpg'
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'm', weight: 'semibold' },
																							content: 'T.T.'
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'screenshot',
																	mix: { block: 'pt-card', elem: 'content' },
																	content: [
																		{
																			block: 'image',
																			mix: { block: 'pt-card', elem: 'image' },
																			url: '/assets/starter-kit/mag.jpg',
																		}
																	]
																},
																{
																	elem: 'article-title',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl' }},
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxxl', weight: 'bold' },
																			mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																			content: 'Something is really wrong'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'm', font: 'sans'  },
																			content: 'I’m James Bridle. I’m a writer and artist concerned with…'
																		}
																	]
																},
																{
																	elem: 'footer',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl', distribute: 'between' }},
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 's', font: 'mono'  },
																			content: 'Nov 6 / 21 min read'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', font: 'mono' },
																			content: [
																				{
																					block: 'text',
																					mods: { weight: 'bold', display: 'inline' },
																					content: '512K '
																				},
																				'views'
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'media',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
																{ block: 'pt-card', mods: { view: 'default' }}
															],
															content: [
																{
																	elem: 'cover',
																	mix: { block: 'pt-card', elem: 'content' },
																	content: [
																		{
																			elem: 'image',
																			content: [
																				{
																					block: 'image',
																					attrs: {
																						style: 'width: 100%'
																					},
																					url: '/assets/starter-kit/london.png',
																				}
																			]
																		},
																		{
																			elem: 'name',
																			mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' }},
																			content: [
																				{
																					elem: 'wrap',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'xxxl', align: 'center', weight: 'bold' },
																							mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																							content: 'Pitchfork\'s Best New Music'
																						},
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'm', align: 'center', font: 'mono', style: 'italic' },
																							content: 'Pitchfork'
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'playlist',
																	mix: { block: 'pt-card', elem: 'footer' },
																	content: [
																		{
																			elem: 'collection',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-h': 'xl' }},
																			content: [
																				{
																					elem: 'sound',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' }},
																					content: [
																						{
																							elem: 'track',
																							content: [
																								{
																									block: 'text',
																									mods: { view: 'primary', size: 's', weight: 'bold', font: 'sans' },
																									mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																									content: 'Travis Scott',
																								},
																								{
																									elem: 'description',
																									content: [
																										{
																											block: 'text',
																											mods: { view: 'secondary', size: 'xs', weight: 'light', font: 'mono' },
																											content: 'Sicko Mode • Hip-Hop',
																										}
																									]
																								}
																							]
																						},
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'bold', font: 'sans' },
																							content: '4:25'
																						}
																					]
																				},
																				{
																					elem: 'sound',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
																					content: [
																						{
																							elem: 'track',
																							content: [
																								{
																									block: 'text',
																									mods: { view: 'primary', size: 's', weight: 'bold', font: 'sans' },
																									mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
																									content: 'Sunflower',
																								},
																								{
																									elem: 'description',
																									content: [
																										{
																											block: 'text',
																											mods: { view: 'secondary', size: 'xs', weight: 'light', font: 'mono' },
																											content: 'Post Malone • Hip-Hop',
																										}
																									]
																								}
																							]
																						},
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'bold', font: 'sans' },
																							content: '5:15'
																						}
																					]
																				},
																				{
																					elem: 'sound',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
																					content: [
																						{
																							elem: 'track',
																							content: [
																								{
																									block: 'text',
																									mods: { view: 'primary', size: 's', weight: 'bold', font: 'sans' },
																									mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
																									content: 'Drip Too Hard ',
																								},
																								{
																									elem: 'description',
																									content: [
																										{
																											block: 'text',
																											mods: { view: 'secandary', size: 'xs', weight: 'light', font: 'mono' },
																											content: 'Lil Baby & Gunna • Hip-Hop',
																										}
																									]
																								}
																							]
																						},
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'bold', font: 'sans' },
																							content: '3:55'
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								},
								/* /Media */

								/* Auth */
								{
									elem: 'section',
									mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'auth',
															mix: { block: 'pt-form', mods: { 'view': 'default' }},
															content: [
																{
																	elem: 'content',
																	mix: { block: 'pt-form', elem: 'item', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			elem: 'item',
																			mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'xxl' }},
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxxl', weight: 'black' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					content: 'Log in'
																				},
																				{
																					block: 'text',
																					mods: { view: 'ghost', size: 's', font: 'sans' },
																					content: 'Welcome Back, Andrey Kopeyka'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'xxl' }},
																			content: [
																				{
																					elem: 'item',
																					mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'l' }},
																					content: {
																						block: 'input',
																						mods: { theme: 'islands', width: 'available', size: 'l'},
																						placeholder: 'Username'
																					}
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'l' }},
																					content: {
																						block: 'input',
																						mods: { theme: 'islands', width: 'available', size: 'l'},
																						placeholder: 'Password'
																					}
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'xxl' }},
																			content: [
																				{
																					elem: 'item',
																					mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: {
																						block: 'button',
																						mods: { theme: 'islands', width: 'full', size: 'l', view: 'action', width: 'available' },
																						text: 'Sign in'
																					}
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: {
																						block: 'button',
																						mods: { theme: 'islands', width: 'full',  size: 'l', width: 'available' },
																						text: 'Facebook'
																					}
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'b' }},
																					content: {
																						block: 'text', mods: { view: 'link',  size: 'l', align: 'center', width: 'available', font: 'sans' },
																						content: 'Signup'
																					}
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'auth',
															mix: { block: 'pt-form', mods: { 'view': 'default' }},
															content: [
																{
																	elem: 'content',
																	mix: { block: 'pt-form', elem: 'item', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			elem: 'item',
																			mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'xxl' }},
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxxl', weight: 'black' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					content: 'Sign in'
																				},
																				{
																					block: 'text',
																					mods: { view: 'ghost', size: 's', font: 'sans' },
																					content: 'Welcome Back, Andrey Kopeyka'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'xxl' }},
																			content: [
																				{
																					elem: 'item',
																					mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'l' }},
																					content: {
																						block: 'input',
																						mods: { theme: 'islands', width: 'available', size: 'l'},
																						placeholder: 'Username'
																					}
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'l' }},
																					content: {
																						block: 'input',
																						mods: { theme: 'islands', width: 'available', size: 'l' },
																						placeholder: 'Password'
																					}
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'xxl' }},
																			content: [
																				{
																					elem: 'item',
																					mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: {
																						block: 'button',
																						mods: { theme: 'islands', width: 'full', size: 'l', view: 'action', width: 'available' },
																						text: 'Sign up'
																					}
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: {
																						block: 'button',
																						mods: { theme: 'islands', width: 'full',  size: 'l', width: 'available' },
																						text: 'Facebook'
																					}
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'b' }},
																					content: {
																						block: 'text', mods: { view: 'link',  size: 'l', align: 'center', width: 'available', font: 'sans' },
																						content: 'Login'
																					}
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'auth',
															mix: { block: 'pt-form', mods: { 'view': 'default' }},
															content: [
																{
																	elem: 'content',
																	mix: { block: 'pt-form', elem: 'item', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			elem: 'item',
																			mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'xxl' }},
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxxl', weight: 'black' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					content: 'Forgot Password'
																				},
																				{
																					block: 'text',
																					mods: { view: 'ghost', size: 's', font: 'sans' },
																					content: 'Welcome Back, Andrey Kopeyka'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'xxl' }},
																			content: [
																				{
																					elem: 'item',
																					mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'l' }},
																					content: {
																						block: 'input',
																						mods: { theme: 'islands', width: 'available', size: 'l' },
																						placeholder: 'Username'
																					}
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'xxl' }},
																			content: [
																				{
																					elem: 'item',
																					mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: {
																						block: 'button',
																						mods: { theme: 'islands', width: 'full', size: 'l', view: 'action', width: 'available' },
																						text: 'Reset'
																					}
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								},
								/* /Auth */

								/* Product */
								{
									elem: 'section',
									mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'product',
															mix: { block: 'pt-card', mods: { view: 'default' }},
															content: [
																{
																	elem: 'footer',
																	mix: [
																		{ block: 'theme', mods: { color: 'whitepaper-brand' }},
																		{ block: 'component', mods: { whitepaper: 'brand' }},
																		{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl', align: 'between', 'vertical-align': 'bottom' }}
																	],
																	elemMods: { state: 'unfold' },
																	content: [
																		{
																			elem: 'about',
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xl', weight: 'black', display: 'inline-block' },
																					content: '$'
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxxl' ,weight: 'black', display: 'inline-block' },
																					content: '2.99'
																				},
																				{
																					block: 'text',
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					mods: { view: 'primary', size: 'm', font: 'sans' },
																					content: 'Jeans skinny jacket by Reebok Brand'
																				},
																				{
																					block: 'button',
																					mods: { theme: 'islands', size: 'l' },
																					text: 'Pre-Order'
																				}
																			]
																		},
																		{
																			elem: 'icon',
																			elemMods: { 'indent-r': 's' },
																			content: [
																				{
																					block: 'icon',
																					mods: { name: 'fave-1', size: 's', view: 'brand', round: 'default' },
																					mix: { block: 'theme', mods: { color: 'whitepaper-default' }}
																				}
																			]
																		}
																	]
																},
																{
																	block: 'image',
																	mix: { block: 'pt-card', elem: 'image' },
																	url: '/assets/starter-kit/fung-1.jpg'
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'product',
															mix: { block: 'pt-card', mods: { view: 'default' }},
															content: [
																{
																	elem: 'footer',
																	elemMods: { state: 'fold' },
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl', align: 'between', 'vertical-align': 'bottom' }},
																	content: [
																		{
																			elem: 'about',
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xl', weight: 'black', display: 'inline-block' },
																					content: '$'
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxxl' ,weight: 'black', display: 'inline-block' },
																					content: '6.99'
																				},
																				{
																					block: 'text',
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					mods: { view: 'secondary', size: 'm', font: 'sans' },
																					content: 'Jeans skinny jacket by Reebok Brand'
																				},
																				{
																					block: 'button',
																					mods: { theme: 'islands', size: 'l' },
																					text: 'Add to Cart'
																				}
																			]
																		},
																		{
																			elem: 'icon',
																			elemMods: { 'indent-r': 's' },
																			content: [
																				{
																					block: 'icon',
																					mods: { name: 'fave-1', size: 's', view: 'primary', round: 'default' },
																					mix: { block: 'theme', mods: { color: 'whitepaper-brand' }}
																				}
																			]
																		}
																	]
																},
																{
																	block: 'image',
																	mix: { block: 'pt-card', elem: 'image' },
																	url: '/assets/starter-kit/fung-2.jpg'
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'product',
															mix: { block: 'pt-card', mods: { view: 'default' }},
															content: [
																{
																	elem: 'footer',
																	mix: [
																		{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																		{ block: 'component', mods: { whitepaper: 'inverse' }},
																		{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl', align: 'between', 'vertical-align': 'bottom' }}
																	],
																	elemMods: { state: 'unfold' },
																	content: [
																		{
																			elem: 'about',
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xl', weight: 'black', display: 'inline-block' },
																					content: '$'
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxxl' ,weight: 'black', display: 'inline-block' },
																					content: '8.99'
																				},
																				{
																					block: 'text',
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					mods: { view: 'primary', size: 'm', font: 'sans' },
																					content: 'Jeans skinny jacket by Reebok Brand'
																				},
																				{
																					block: 'button',
																					mods: { theme: 'islands', size: 'l' },
																					text: 'Choose size'
																				}
																			]
																		},
																		{
																			elem: 'icon',
																			elemMods: { 'indent-r': 's' },
																			content: [
																				{
																					block: 'icon',
																					mods: { name: 'fave-1', size: 's', view: 'primary', round: 'default' },
																					mix: { block: 'theme', mods: { color: 'whitepaper-default' }}
																				}
																			]
																		}
																	]
																},
																{
																	block: 'image',
																	mix: { block: 'pt-card', elem: 'image' },
																	url: '/assets/starter-kit/fung-3.jpg'
																}
															]
														}
													]
												}
											]
										}
									]
								},
								/* /Product */

								/* APP */
								{
									elem: 'section',
									mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'app',
															mods: { view: 'monument-hypnotic' },
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
																{ block: 'pt-card', mods: { view: 'inverse' }}
															],
															content: [
																{
																	elem: 'cover',
																	mix: { block: 'pt-card', elem: 'image', elemMods: { size: 'cover' }},
																	content: [
																		{
																			block: 'image',
																			url: '/assets/starter-kit/monument2.png',
																		}
																	]
																},
																{
																	elem: 'info',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xxl', distribute: 'center' }},
																	content: [
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
																			mods: { size: 'xxl', weight: 'bold', align: 'center', view: 'primary' },
																			content: 'Holiday Bundle'
																		},
																		{
																			block: 'image',
																			url: '/assets/starter-kit/group.png'
																		}
																	]
																},
																{
																	elem: 'developer-list',
																	mix: [
																		{ block: 'pt-list' },
																		{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', distribute: 'between' }}
																	],
																	content: [
																		{
																			elem: 'wrap',
																			content: [
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l', distribute: 'between', 'vertical-align': 'center' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'brand-logo',
																											mods: { 'name': 'monument-valley', size: 's', form: 'mask' }
																										}
																									]
																								},
																								{
																									elem: 'block',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 's', view: 'primary' },
																											content: 'Monument Vallet'
																										},
																										{
																											block: 'text',
																											mods: { size: 's', view: 'ghost' },
																											content: 'by ustwo games'
																										}
																									]
																								}
																							]
																						},
																						{
																							block: 'badge',
																							mods: { view: 'default' },
																							content: '$99'
																						}
																					]
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l', distribute: 'between', 'vertical-align': 'center' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'brand-logo',
																											mods: { 'name': 'monument-valley-2', size: 's', form: 'mask'}
																										}
																									]
																								},
																								{
																									elem: 'block',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 's', view: 'primary' },
																											content: 'Monument Valley 2'
																										},
																										{
																											block: 'text',
																											mods: { size: 's', view: 'ghost' },
																											content: 'by ustwo games'
																										}
																									]
																								}
																							]
																						},
																						{
																							block: 'badge',
																							mods: { view: 'default' },
																							content: '$99'
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'app',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
																{ block: 'pt-card', mods: { view: 'default' }},
															],
															content: [
																{
																	elem: 'good-info',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			block: 'image',
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
																			url: '/assets/starter-kit/good-cover.png'
																		},
																		{
																			block: 'text',
																			mods: { size: 'xxxl', view: 'primary', weight: 'bold' },
																			mix: { block: 'decorator', mods: { 'space-b': 'l' }},
																			content: 'From our Bafta award winning hit'
																		},
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'secondary', font: 'sans' },
																			content: 'Enjoy beautiful levels filled with illusory, meditative puzzles'
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', distribute: 'between' }},
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			content: [
																				{
																					block: 'brand-logo',
																					mods: { 'name': 'ustwo', size: 's'},
																					mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' } },
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'm' },
																							content: 'Monument Valley'
																						},
																						{
																							block: 'text',
																							mods: { size: 's', view: 'ghost' },
																							content: 'by ustwo games'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'badge',
																			mods: { view: 'default' },
																			content: '$99'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'app',
															mods: { view: 'monument' },
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
																{ block: 'pt-card', mods: { view: 'inverse' } },
															],
															content: [
																{
																	elem: 'cover',
																	mix: { block: 'pt-card', elem: 'image', elemMods: { size: 'cover' }},
																	content: [
																		{
																			block: 'image',
																			url: '/assets/starter-kit/monument.png'
																		}
																	]
																},
																{
																	elem: 'preview',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl', 'distribute': 'center' }},
																	content: [
																		{
																			block: 'image',
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
																			url: '/assets/starter-kit/ustwo.svg'
																		},
																		{
																			elem: 'about',
																			mix: { block: 'pt-card', elem: 'content', elemMods: {distribute: 'center' }},
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'xxxl', view: 'primary', align: 'center', weight: 'bold' },
																					mix: { block: 'decorator', mods: { 'space-b': 's' }},
																					content: 'From our Bafta award winning hit!'
																				},
																				{
																					block: 'text',
																					mods: { size: 'm', view: 'primary', align: 'center', font: 'sans' },
																					content: 'Enjoy beautiful meditative puzzle game'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: [
																		{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', distribute: 'between' }},
																		{ block: 'pt-card', elem: 'item' }
																	],
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			content: [
																				{
																					block: 'brand-logo',
																					mods: { 'name': 'monument-valley-2', size: 's', form: 'mask'},
																					mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' } },
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { size: 's', view: 'primary' },
																							content: 'Monument Valley'
																						},
																						{
																							block: 'text',
																							mods: { size: 's', view: 'ghost' },
																							content: 'by ustwo games'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'badge',
																			mods: { view: 'default' },
																			content: '$99'
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								},
								/* /APP */

								/* Informer */
								{
									elem: 'section',
									mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'informer',
															mods: { view: 'alert' },
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-alert' }},
																{ block: 'component', mods: { whitepaper: 'alert' }},
																{ block: 'pt-card' },
																{ block: 'pt-informer', mods: { view: 'alert' }}
															],
															content: [
																{
																	elem: 'content',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			elem: 'icon-wrapper',
																			content: [
																				{
																					block: 'icon',
																					mods: { name: 'minus', size: 'm', view: 'alert' }
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xxl', weight: 'bold', align: 'center', view: 'primary' },
																			content: 'Error'
																		},
																		{
																			block: 'text',
																			mods: { size: 'm', align: 'center', view: 'primary', font: 'sans' },
																			content: 'Currently payments not available'
																		}
																	]
																},
																{
																	elem: 'footer',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', align: 'center' }},
																	content: [
																		{
																			elem: 'account',
																			content: [
																				{
																					elem: 'info',
																					mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
																					content: [
																						{
																							block: 'text',
																							mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
																							mods: { size: 'xs', view: 'primary', transform: 'uppercase', spacing: 's' },
																							content: 'Information'
																						},
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 'l' },
																									content: [
																										{
																											block: 'image',
																											url: '/assets/starter-kit/mastercard.svg',
																											width: 36
																										}
																									]
																								},
																								{
																									elem: 'block',
																									content: [
																										{
																											block: 'text',
																											mods: { mods: 'm', view: 'primary' },
																											content: '4276 55•• •••• 5371'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					block: 'button',
																					mods: { theme: 'islands', width: 'full', size: 'l', view: 'action',  width: 'available' },
																					text: 'Done'
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'informer',
															mods: { view: 'warning' },
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-warning' }},
																{ block: 'component', mods: { whitepaper: 'warning' }},
																{ block: 'pt-card' },
																{ block: 'pt-informer', mods: { view: 'warning' }}
															],
															content: [
																{
																	elem: 'content',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			elem: 'icon-wrapper',
																			content: [
																				{
																					block: 'icon',
																					mods: { name: 'attention', size: 'm', view: 'warning' }
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xxl', weight: 'bold', align: 'center', view: 'primary' },
																			content: 'Warning'
																		},
																		{
																			block: 'text',
																			mods: { size: 'm', align: 'center', view: 'primary', font: 'sans' },
																			content: 'Currently payments not available'
																		}
																	]
																},
																{
																	elem: 'footer',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', align: 'center' }},
																	content: [
																		{
																			elem: 'account',
																			content: [
																				{
																					elem: 'info',
																					mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
																					content: [
																						{
																							block: 'text',
																							mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
																							mods: { size: 'xs', view: 'primary', transform: 'uppercase', spacing: 's' },
																							content: 'Transfer to card'
																						},
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 'l' },
																									content: [
																										{
																											block: 'image',
																											url: '/assets/starter-kit/mastercard.svg',
																											width: 36
																										}
																									]
																								},
																								{
																									elem: 'block',
																									content: {
																										block: 'text',
																										mods: { mods: 'm', view: 'primary' },
																										content: '4276 55•• •••• 5371'
																									}
																								}
																							]
																						}
																					]
																				},
																				{
																					block: 'button',
																					mods: { theme: 'islands', width: 'full', size: 'l', view: 'action',  width: 'available' },
																					text: 'Done'
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'informer',
															mods: { view: 'success' },
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-success' }},
																{ block: 'component', mods: { whitepaper: 'success' }},
																{ block: 'pt-card' },
																{ block: 'pt-informer', mods: { view: 'success' }}
															],
															content: [
																{
																	elem: 'content',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			elem: 'icon-wrapper',
																			content: [
																				{
																					block: 'icon',
																					mods: { name: 'check', size: 'm', view: 'success' }
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xxl', weight: 'bold', align: 'center', view: 'primary' },
																			content: 'Success'
																		},
																		{
																			block: 'text',
																			mods: { size: 'm', align: 'center', view: 'primary', font: 'sans' },
																			content: 'Payment completed'
																		}
																	]
																},
																{
																	elem: 'footer',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', align: 'center' }},
																	content: [
																		{
																			elem: 'acoount',
																			content: [
																				{
																					elem: 'info',
																					mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
																					content: [
																						{
																							block: 'text',
																							mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
																							mods: { size: 'xs', view: 'primary', transform: 'uppercase', spacing: 's' },
																							content: 'Information'
																						},
																						{
																							block: 'text',
																							mods: { size: 's', view: 'primary', font: 'sans' },
																							content: 'Just visited the best beach for surfing. The waves are awesome.'
																						}
																					]
																				},
																				{
																					block: 'button',
																					mods: { theme: 'islands', width: 'full', size: 'l', view: 'action',  width: 'available' },
																					text: 'Done'
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								},
								/* /Informer */

								/* Offer */
								{
									elem: 'section',
									mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'offer',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
																{ block: 'pt-card', mods: { view: 'default' }},
															],
															content: [
																{
																	elem: 'service-image-wrapper',
																	mix: { block: 'pt-card', elem: 'content' },
																	content: [
																		{
																			block: 'image',
																			mix: { block: 'pt-card', elem: 'image', elemMods: { size: 'cover' }},
																			url: '/assets/starter-kit/offer-service-image.png'
																		}
																	]
																},
																{
																	elem: 'title',
																	mix: { block: 'pt-card', elem: 'header', elemMods: { 'space-v': 'xxl', distribute: 'center' }},
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xl', font: 'serif', weight: 'bold', transform: 'uppercase', align: 'center', display: 'block', spacing: 'm' },
																			content: 'Porsche'
																		}
																	]
																},
																{
																	elem: 'service-info',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			elem: 'wrap',
																			content: [
																				{
																					block: 'text',
																					mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
																					mods: { view: 'primary', size: 'm', weight: 'semibold' },
																					content: 'Porsche and comfort never comprised. The Porsche will lead to an unforgettable journey'
																				},
																				{
																					elem: 'price',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: 'from'
																						},
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'xxxl', weight: 'semibold' },
																							content: '$1200'
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'offer',
															mix: { block: 'pt-card', mods: { view: 'default' }},
															content: [
																{
																	elem: 'brand-content',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl' }},
																	content: [
																		{
																			elem: 'brand-image-wrapper',
																			mix: { block: 'pt-card', elem: 'content' },
																			content: [
																				{
																					elem: 'image',
																					mix: { block: 'pt-card', elem: 'image' },
																					content: [
																						{
																							block: 'image',
																							attrs: { 'style': 'width: 100%' },
																							url: '/assets/starter-kit/offer-brand-image.png'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxl', align: 'center', transform: 'uppercase', weight: 'bold' },
																			mix: { block: 'decorator', mods: { 'indent-t': 's', 'indent-b': 'xs' }},
																			content: 'Ape shall never kill'
																		},
																		{
																			elem: 'brand-logo-wrapper',
																			mix: { block: 'text', mods: { align: 'center' }},
																			content: [
																				{
																					block: 'brand-logo',
																					mods: { name: 'bape', size: 's' },
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'brand-action',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-v': 'xxl', distribute: 'center' }},
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'm', weight: 'bold', align: 'center' },
																			content: 'Learn More'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'offer',
															mix: { block: 'pt-card', mods: { view: 'default' }},
															content: [
																{
																	elem: 'goods-header',
																	content: [
																		{
																			elem: 'goods-background',
																		},
																		{
																			elem: 'goods-price',
																			mix: { block: 'text', mods: { style: 'italic', weight: 'bold' }},
																			content: '$299'
																		}
																	]
																},
																{
																	elem: 'goods-item',
																	mix: { block: 'pt-card', elem: 'header' },
																	content: [
																		{
																			elem: 'goods-image-wrapper',
																			mix: { block: 'pt-card', elem: 'content' },
																			content: [
																				{
																					block: 'image',
																					mix: { block: 'pt-card', elem: 'image' },
																					url: '/assets/starter-kit/offer-goods-image.png'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'goods-info',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'xxl', 'space-h': 'l', 'space-t': 'xxs' } },
																	content: [
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
																			mods: { view: 'primary', font: 'mono', weight: 'black', size: 'xl', align: 'center', transform: 'uppercase' },
																			content: { html: 'Nike Gyakusou<br>Gaiter Boot'}
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', align: 'center', font: 'sans' },
																			content: 'You have the goal. We have a gift'
																		}
																	]
																},
																{
																	elem: 'action',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-v': 'xxl', distribute: 'center' }},
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'm', weight: 'bold', align: 'center' },
																			content: 'Shop Now'
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								},
								/* /Offer */

								/* Publication */
								{
									elem: 'section',
									mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'publication',
															mix: { block: 'pt-card', mods: { 'view': 'default' }},
															content: [
																{
																	elem: 'content',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
																			mods: { view: 'link', size: 'xxl', font: 'sans' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'xl', weight: 'bold', font: 'mono', transform: 'uppercase' },
																					content: 'This is a slow roll: '
																				},
																				'facebook will be the same '
																			]
																		},
																		{
																			block: 'pt-icon-plus',
																			mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
																			mods: { 'vertical-align': 'center' },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 's' },
																					mix: { block: 'avatar' },
																					content: [
																						{
																							block: 'avatar',
																							elem: 'photo',
																							elemMods: { size: 's'},
																							content: [
																								{
																									block: 'image',
																									width: 40,
																									url: '/assets/starter-kit/Aaron Poe.jpg'
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold', font: 'sans' },
																							content: 'Aaron Poe'
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 's', font: 'sans' },
																							content: '2h ago'
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'article-content',
																			mix: { block: 'text', mods: { size: 's', font: 'sans' }},
																			content: `Late last Friday, Paul Grewal, Facebook’s vice president and deputy general counsel, wrote a seemingly straightforward blog post.`
																		},
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-v': 'xxl', 'indent-l': 'l' }},
																			mods: { view: 'primary', size: 'xl', weight: 'bold', style: 'italic', font: 'sans' },
																			content: [
																				'We are committed to vigorously enforcing policies to protect people'
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', font: 'sans' },
																			content: `As we all now know, of course, Facebook wasn’t offering a bare-chested confessional.`
																		}

																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'publication',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
																{ block: 'pt-card' }
															],
															content: [
																{
																	block: 'image',
																	mix: { block: 'pt-card', elem: 'image', elemMods: { size: 'cover' }},
																	url: '/assets/starter-kit/article-preview.png'
																},
																{
																	block: 'header',
																	mix: { block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'xxl', 'distribute': 'between' }},
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'm', weight: 'bold' },
																			content: 'Hive'
																		},
																		{
																			block: 'text',
																			mods: { view: 'link', size: 'xs', transform: 'uppercase' },
																			content: 'Technology'
																		}
																	]
																},
																{
																	elem: 'footer',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			elem: 'footer-inner',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'xl', view: 'primary', weight: 'bold', font: 'mono', transform: 'uppercase' },
																					content: 'This is a slow roll: '
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'l', font: 'sans' },
																					content: 'silicon valley insiders think that facebook will never be the same'
																				},
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-t': 'l' }},
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-r': 's' },
																							content: [
																								{
																									block: 'avatar',
																									elem: 'photo',
																									elemMods: { size: 's' },
																									content: [
																										{
																											block: 'image',
																											width: 40,
																											url: '/assets/starter-kit/Nick Bilton.jpg'
																										}
																									]
																								}
																							]
																						},
																						{
																							elem: 'block',
																							content: [
																								{
																									block: 'text',
																									mods: { view: 'primary', size: 'm', weight: 'bold', display: 'inline', font: 'sans' },
																									content: 'Nick '
																								},
																								{
																									block: 'text',
																									mods: { view: 'primary', size: 'm', weight: 'light', display: 'inline', font: 'sans' },
																									content: 'Bilton'
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'publication',
															mix: { block: 'pt-card', mods: { view: 'default' }},
															content: [
																{
																	elem: 'item',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 's' },
																					mix: { block: 'avatar' },
																					content: [
																						{
																							block: 'avatar',
																							elem: 'photo',
																							elemMods: { size: 's' },
																							content: [
																								{
																									block: 'image',
																									width: 40,
																									url: '/assets/starter-kit/Kyle Caruso.jpg'
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold', font: 'sans' },
																							content: 'Kyle Caruso'
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 's', font: 'sans' },
																							content: '2h ago'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', font: 'sans' },
																			mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																			content: 'Just visited the best beach for surfing. The waves are awesome. Just visited the best beach for surfing. The waves are awesome. Just visited the best beach for surfing. The waves are awesome. How does he do it? 😵😵😵'
																		},
																		{
																			block: 'image',
																			url: '/assets/starter-kit/feed-photo.png',
																			width: '100%',
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', distribute: 'between' }},
																	content: [
																		{
																			elem: 'actiion',
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'link', weight: 'semibold', size: 's', display: 'inline-block', font: 'sans' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'm' }},
																					content: 'Add comment'
																				},
																				{
																					block: 'text',
																					mods: { view: 'link', weight: 'semibold', size: 's', display: 'inline-block', font: 'sans' },
																					content: 'Share'
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'link', weight: 'semibold', size: 's', display: 'inline-block', font: 'sans' },
																			content: 'Like'
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								},
								/* /Publication */

								/* Event */
								{
									elem: 'section',
									mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'event',
															mix: [
																{ block: 'pt-list' },
																{ block: 'pt-card', mods: { view: 'default' }},
															],
															content: [
																{
																	elem: 'content',
																	mix: { block: 'pt-card', elem: 'content' },
																	content: [
																		{
																			elem: 'photo',
																			content: [
																				{
																					block: 'image',
																					attrs: { 'style': 'width: 100%' },
																					url: '../../../../assets/starter-kit/subzero-cover.png'
																				}
																			]
																		},
																		{
																			elem: 'description',
																			mix: [
																				{ block: 'theme', mods: { color: 'whitepaper-brand' }},
																				{ block: 'component', mods: { whitepaper: 'brand' }},
																				{ block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'l' }},
																			],
																			content: [
																				{
																					elem: 'name',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'xxs', distribute: 'between' }},
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'xl', weight: 'bold' },
																							content: 'Subzero!'
																						},
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'xl', weight: 'bold', font: 'sans' },
																							content: '4.5'
																						}
																					]
																				},
																				{
																					elem: 'rating',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'l', distribute: 'between' }},
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'm', weight: 'semibold', font: 'sans', font: 'sans' },
																							content: 'Cafe'
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'm', weight: 'semibold', font: 'sans', font: 'sans' },
																							content: '324 reviews'
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'footer',
																	mix: { block: 'pt-card', elem: 'footer' },
																	content: [
																		{
																			elem: 'info',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-h': 'l', 'space-v': 'xxl', 'indent-b': 's' }},
																			content: [
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'marker', size: 's', view: 'primary', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-brand' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', display: 'inline', font: 'sans' },
																											content: 'Kaigandori, Naka-ku 23 Japan'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'phone-1', size: 's', view: 'primary', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-brand' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', display: 'inline', font: 'sans' },
																											content: '81 45-662-1099'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'comment', size: 's', view: 'primary', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-brand' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', display: 'inline', font: 'sans' },
																											content: 'www.subzero.com'
																										}
																									]
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'event',
															mix: [
																{ block: 'pt-list' },
																{ block: 'pt-card', mods: { view: 'default' }},
															],
															content: [
																{
																	elem: 'announce',
																	mix: [
																		{ block: 'theme', mods: { color: 'whitepaper-brand' }},
																		{ block: 'component', mods: { whitepaper: 'brand' }},
																		{ block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'xl' }},
																		{ block: 'pt-card', elem: 'content' }
																	],
																	content: [
																		{
																			elem: 'date',
																			mix: { block: 'text', mods: { size: 's', view: 'primary' }},
																			content: 'May'
																		},
																		{
																			elem: 'type',
																			mix: [
																				{ block: 'text', mods: { size: 'm', view: 'secondary', weight: 'bold' }},
																				{ block: 'decorator', mods: { 'indent-b': 'xs' }}
																			],
																			content: 'Event'
																		},
																		{
																			elem: 'event',
																			mix: [
																				{ block: 'text', mods: { size: 'xxl', view: 'primary', weight: 'bold', font: 'sans' }},
																				{ block: 'decorator', mods: { 'indent-b': 's' }}
																			],
																			content: '3rd Annual Innate Killer'
																		},
																		{
																			block: 'avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: [
																				{
																					block: 'image',
																					width: 40,
																					url: '/assets/starter-kit/Carolyn Z.jpg'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'info',
																	mix: [
																		{ block: 'pt-list', elem: 'item', elemMods: { 'space-v': 'xxl', 'space-h': 'xl' }},
																		{ block: 'pt-card', elem: 'footer' }
																	],
																	content: [
																		{
																			elem: 'wrap',
																			content: [
																				{
																					elem: 'contacts',
																					mix: [
																						{ block: 'pt-list' },
																						{ block: 'decorator', mods: { 'indent-b': 'xxl' }}
																					],
																					content: [
																						{
																							elem: 'item',
																							mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																							content: [
																								{
																									block: 'pt-icon-plus',
																									mods: { 'vertical-align': 'center' },
																									content: [
																										{
																											elem: 'icon',
																											elemMods: { 'indent-r': 's' },
																											content: [
																												{
																													block: 'icon',
																													mods: { name: 'marker', size: 's', view: 'primary', round: 'default' },
																													mix: { block: 'theme', mods: { color: 'whitepaper-brand' }}
																												}
																											]
																										},
																										{
																											block: 'content',
																											content: [
																												{
																													block: 'text',
																													mods: { size: 'm', display: 'inline', font: 'sans' },
																													content: 'Kaigandori, Naka-ku 23 Japan'
																												}
																											]
																										}
																									]
																								}
																							]
																						},
																						{
																							elem: 'item',
																							mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																							content: [
																								{
																									block: 'pt-icon-plus',
																									mods: { 'vertical-align': 'center' },
																									content: [
																										{
																											elem: 'icon',
																											elemMods: { 'indent-r': 's' },
																											content: [
																												{
																													block: 'icon',
																													mods: { name: 'phone-1', size: 's', view: 'primary', round: 'default' },
																													mix: { block: 'theme', mods: { color: 'whitepaper-brand' }}
																												}
																											]
																										},
																										{
																											block: 'content',
																											content: [
																												{
																													block: 'text',
																													mods: { size: 'm', display: 'inline', font: 'sans' },
																													content: '81 45-662-1099'
																												}
																											]
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					block: 'button',
																					mods: { theme: 'islands', size: 'l', view: 'action', width: 'available' },
																					text: 'Choose month plan'
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'event',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-brand' }},
																{ block: 'component', mods: { whitepaper: 'brand' }},
																{ block: 'pt-card', mods: { view: 'default' }}
															],
															content: [
																{
																	elem: 'content',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 's' },
																					mix: { block: 'avatar' },
																					content: [
																						{
																							block: 'avatar',
																							elem: 'photo',
																							elemMods: { size: 's' },
																							content: [
																								{
																									block: 'image',
																									width: 40,
																									url: '/assets/starter-kit/Steph Jeong.jpg'
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'm', weight: 'semibold', font: 'sans' },
																							content: 'Steph Jeong'
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 's' },
																							content: '@jeongsteph'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xl', view: 'primary', weight: 'bold' },
																			content: [
																				'No individual colour making up this wave travels ',
																				{
																					block: 'text',
																					mods: { weight: 'light', display: 'inline', font: 'sans' },
																					content: 'faster than the grid lines, but the sum of all components appears to outrace the grid.  This is how “group velocities” can exceed the speed of light without carrying information.'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'logo',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', weight: 'semibold' },
																			content: 'Twitter'
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								},
								/* /Event */

								/* Donate */
								{
									elem: 'section',
									mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'donate',
															mix: { block: 'pt-card', mods: { view: 'default' }},
															content: [
																{
																	elem: 'person-image-wrapper',
																	mix: { block: 'pt-card', elem: 'content' },
																	content: [
																		{
																			block: 'image',
																			mix: { block: 'pt-card', elem: 'image' },
																			url: '/assets/starter-kit/donate-person-image.png'
																		}
																	]
																},
																{
																	elem: 'person-avatar-wrapper',
																	mix: { block: 'pt-card', elem: 'header' },
																	content: [
																		{
																			elem: 'person-avatar',
																			mix: { block: 'avatar', elem: 'photo', elemMods: { size: 'm' }},
																			content: [
																				{
																					block: 'image',
																					width: 64,
																					url: '/assets/starter-kit/Nick Bilton.jpg'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'person-info',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'xl', 'space-t': 'xl' }},
																	content: [
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																			mods: { view: 'primary', size: 'xxl', weight: 'bold' },
																			content: [
																				'Sam Harris ',
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxl', weight: 'regular', style: 'italic', display: 'inline', font: 'sans' },
																					content: 'is creating The Waking Up Podcast'
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'm', font: 'sans' },
																			content: 'I launched Waking Up in 2015, and it regularly ranks among the top 100 podcasts in the US, UK, Canada, and Australia. It has been selected by Apple as one of "iTunes Best" and has won a Webby…'
																		}
																	]
																},
																{
																	elem: 'person-action',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'xl', 'space-v': 'xl' }},
																	content: [
																		{
																			block: 'button',
																			mods: { theme: 'islands', size: 'l', width: 'available', view: 'action' },
																			text: 'Send $10'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'donate',
															mix: { block: 'pt-card', mods: { view: 'default' }},
															content: [
																{
																	elem: 'event-image-wrapper',
																	mix: { block: 'pt-card', elem: 'content' },
																	content: [
																		{
																			block: 'image',
																			mix: { block: 'pt-card', elem: 'image' },
																			attrs: { 'style': 'max-height: 260px;' },
																			url: '/assets/starter-kit/donate-event-image.png'
																		}
																	]
																},
																{
																	elem: 'event-header',
																	mix: { block: 'pt-card', elem: 'header', elemMods: { distribute: 'center' }},
																	content: [
																		{
																			elem: 'wrap',
																			content: [
																				{
																					elem: 'event-avatar-wrapper',
																					content: [
																						{
																							block: 'avatar',
																							elem: 'photo',
																							elemMods: { size: 'l' },
																							mix: { block: 'donate', elem: 'event-avatar' },
																							content: [
																								{
																									block: 'image',
																									width: 40,
																									url: '/assets/starter-kit/Jenny Johannesson.jpg'
																								}
																							]
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxl', weight: 'bold', align: 'center', transform: 'uppercase' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																					content: 'Inna’s B-day'
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 's', align: 'center' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'm', weight: 'bold', display: 'inline', font: 'sans' },
																							content: '25:12:08:43 '
																						},
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'm', display: 'inline', font: 'sans' },
																							content: 'until the end'
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxxl', weight: 'semibold', align: 'center' },
																					content: '$10.00'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'event-action',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'xl', 'space-v': 'xl' }},
																	content: [
																		{
																			elem: 'event-avatar-group',
																			content: [
																				{
																					elem: 'event-mini-avatar',
																					content: [
																						{
																							block: 'avatar',
																							elem: 'photo',
																							elemMods: { size: 's'},
																							content: [
																								{
																									block: 'image',
																									width: 40,
																									url: '/assets/starter-kit/Jenny Johannesson.jpg'
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'event-mini-avatar',
																					content: [
																						{
																							block: 'avatar',
																							elem: 'photo',
																							elemMods: { size: 's'},
																							content: [
																								{
																									block: 'image',
																									width: 40,
																									url: '/assets/starter-kit/Steph Jeong.jpg'
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'event-mini-avatar',
																					content: [
																						{
																							block: 'avatar',
																							elem: 'photo',
																							elemMods: { size: 's'},
																							content: [
																								{
																									block: 'image',
																									width: 40,
																									url: '/assets/starter-kit/Aaron Poe.jpg'
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'event-mini-avatar',
																					content: [
																						{
																							block: 'avatar',
																							elem: 'photo',
																							elemMods: { size: 's'},
																							content: [
																								{
																									block: 'image',
																									width: 40,
																									url: '/assets/starter-kit/Carolyn Z.jpg'
																								}
																							]
																						}
																					]
																				},
																				{
																					block: 'text',
																					mix: { block: 'decorator', mods: { 'indent-l': 'xxs' } },
																					mods: { view: 'primary', size: 'm', weight: 'semibold' },
																					content: '+6'
																				}
																			]
																		},
																		{
																			block: 'button',
																			mods: { theme: 'islands', view: 'action', size: 'l' },
																			text: 'Make a party'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'donate',
															mix: { block: 'pt-card', mods: { view: 'default' }},
															content: [
																{
																	elem: 'project-image-wrapper',
																	mix: { block: 'pt-card', elem: 'content' },
																	content: [
																		{
																			block: 'image',
																			mix: { block: 'pt-card', elem: 'image' },
																			attrs: { style: 'display: block' },
																			url: '/assets/starter-kit/donate-project-image.png'
																		},
																		{
																			elem: 'project-play',
																		},
																		{
																			elem: 'project-progress-bar',
																		}
																	]
																},
																{
																	elem: 'project-info',
																	mix: [
																		{ block: 'theme', mods: { color: 'whitepaper-default' }},
																		{ block: 'component', mods: { whitepaper: 'default' }},
																		{ block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'xl' }}
																	],
																	content: [
																		{
																			elem: 'project-countdowns',
																			mix: { block: 'decorator', mods: { 'indent-v': 'xs' }},
																			content: [
																				{
																					elem: 'amount-wrapper',
																					mix: { block: 'decorator', mods: { 'indent-r': 'xxxxl' }},
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'l', weight: 'bold' },
																							content: '$4,464'
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 's', font: 'sans' },
																							content: 'pledged of 6,217 goal'
																						}
																					]
																				},
																				{
																					elem: 'days-wrapper',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'l', weight: 'bold' },
																							content: '32'
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 's', font: 'sans' },
																							content: 'days to go'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxl', weight: 'bold' },
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xl', weight: 'bold' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																					content: 'Feature-Packed Delay Pedal by RedShift Effects'
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'm', font: 'sans' },
																			content: 'A high-quality, hand-built tap tempo delay pedal with ' +
																			'modulated filtering, plenty of delay time, and a handful …'
																		}
																	]
																},
																{
																	elem: 'project-action',
																	mix: [
																		{ block: 'theme', mods: { color: 'whitepaper-default' }},
																		{ block: 'component', mods: { whitepaper: 'default' }},
																		{ block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'xl', 'space-v': 'xl' }},
																	],
																	content: [
																		{
																			block: 'button',
																			mods: { theme: 'islands', size: 'l', width: 'available', view: 'action' },
																			text: 'Back this project'
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
								/* /Donate */

							]
						}
					]
				}
			]
		}
	]
};
