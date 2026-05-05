import React, { useEffect, useState, useMemo } from 'react';
import { Store, CheckCircle2, Search, MapPin, Package, Sun, MoonStar } from 'lucide-react';

const App = () => {
  // 資料庫最新狀態：24 項已確認材料
  const initialItems = [
    {
      id: 1,
      name: '「9°C」咖啡豆',
      sources: [
        '2-Four便利店(橋間地)',
        '豆風庵咖啡豆店(繪空町)',
        '豆風庵咖啡豆店(米格爾區)',
        '豆風庵咖啡豆店(新赫蘭德區)'
      ]
    },
    {
      id: 2,
      name: '椰子',
      sources: [
        'Myosotis水果店(橋間地)',
        'Myosotis水果店(米格爾區)',
        'Myosotis水果店(新赫蘭德區)'
      ]
    },
    {
      id: 3,
      name: '「烘焙伴侶」可可粉',
      sources: [
        '2-Four便利店(橋間地)',
        '豆風庵咖啡豆店(繪空町)',
        '豆風庵咖啡豆店(米格爾區)',
        '豆風庵咖啡豆店(新赫蘭德區)'
      ]
    },
    {
      id: 4,
      name: '麵粉',
      sources: [
        '2-Four便利店(橋間地)',
        '怪·食惠副食品店(繪空町)',
        '怪·食惠副食品店(米格爾區)',
        '怪·食惠副食品店(新赫蘭德區)'
      ]
    },
    {
      id: 5,
      name: '蘋果',
      sources: [
        'Myosotis水果店(橋間地)',
        'Myosotis水果店(繪空町)',
        'Myosotis水果店(米格爾區)',
        'Myosotis水果店(新赫蘭德區)'
      ]
    },
    {
      id: 6,
      name: '番茄',
      sources: [
        '蔬菜屋蔬菜店(繪空町)',
        '蔬菜屋蔬菜店(米格爾區)',
        '蔬菜屋蔬菜店(新赫蘭德區)'
      ]
    },
    {
      id: 7,
      name: '生雞蛋',
      sources: [
        '普利姆叔叔肉鋪(橋間地)',
        '普利姆叔叔肉鋪(米格爾區)',
        '普利姆叔叔肉鋪(新赫蘭德區)'
      ]
    },
    {
      id: 8,
      name: '生菜',
      sources: [
        '蔬菜屋蔬菜店(橋間地)',
        '蔬菜屋蔬菜店(繪空町)',
        '蔬菜屋蔬菜店(米格爾區)',
        '蔬菜屋蔬菜店(新赫蘭德區)'
      ]
    },
    {
      id: 9,
      name: '海魚',
      sources: [
        '7-Oceans水產店(橋間地)',
        '7-Oceans水產店(新赫蘭德區)'
      ]
    },
    {
      id: 10,
      name: '牛奶',
      sources: [
        '2-Four便利店(橋間地)',
        '2-Four便利店(繪空町)',
        '2-Four便利店(米格爾區)',
        '2-Four便利店(新赫蘭德區)',
        '豆風庵咖啡豆店(繪空町)',
        '豆風庵咖啡豆店(米格爾區)',
        '豆風庵咖啡豆店(新赫蘭德區)'
      ]
    },
    {
      id: 11,
      name: '星彩糖',
      sources: [
        '噗卡糖果店(橋間地)',
        '噗卡糖果店(米格爾區)',
        '噗卡糖果店(新赫蘭德區)'
      ]
    },
    {
      id: 12,
      name: '柳丁',
      sources: [
        'Myosotis水果店(橋間地)',
        'Myosotis水果店(繪空町)',
        'Myosotis水果店(米格爾區)',
        'Myosotis水果店(新赫蘭德區)'
      ]
    },
    {
      id: 13,
      name: '「烘焙伴侶」抹茶粉',
      sources: [
        '豆風庵咖啡豆店(繪空町)',
        '豆風庵咖啡豆店(米格爾區)',
        '豆風庵咖啡豆店(新赫蘭德區)'
      ]
    },
    {
      id: 14,
      name: '「烘焙伴侶」淡奶油',
      sources: [
        '怪·食惠副食品店(繪空町)',
        '怪·食惠副食品店(米格爾區)',
        '怪·食惠副食品店(新赫蘭德區)'
      ]
    },
    {
      id: 15,
      name: '新鮮牛肉',
      sources: [
        '普利姆叔叔肉鋪(繪空町)',
        '普利姆叔叔肉鋪(米格爾區)',
        '普利姆叔叔肉鋪(新赫蘭德區)'
      ]
    },
    {
      id: 16,
      name: '硬質奶油',
      sources: [
        '怪·食惠副食品店(繪空町)',
        '怪·食惠副食品店(米格爾區)',
        '怪·食惠副食品店(新赫蘭德區)'
      ]
    },
    {
      id: 17,
      name: '紅豆',
      sources: [
        '怪·食惠副食品店(繪空町)',
        '怪·食惠副食品店(米格爾區)',
        '怪·食惠副食品店(新赫蘭德區)'
      ]
    },
    {
      id: 18,
      name: '洋蔥',
      sources: [
        '蔬菜屋蔬菜店(橋間地)',
        '蔬菜屋蔬菜店(繪空町)',
        '蔬菜屋蔬菜店(米格爾區)',
        '蔬菜屋蔬菜店(新赫蘭德區)'
      ]
    },
    {
      id: 19,
      name: '新鮮豬肉',
      sources: [
        '普利姆叔叔肉鋪(橋間地)',
        '普利姆叔叔肉鋪(繪空町)',
        '普利姆叔叔肉鋪(米格爾區)',
        '普利姆叔叔肉鋪(新赫蘭德區)'
      ]
    },
    {
      id: 20,
      name: '「糖or鹽」海鹽',
      sources: [
        '怪·食惠副食品店(繪空町)',
        '怪·食惠副食品店(米格爾區)',
        '怪·食惠副食品店(新赫蘭德區)'
      ]
    },
    {
      id: 21,
      name: '糖糖曲奇',
      sources: [
        '噗卡糖果店(橋間地)',
        '噗卡糖果店(米格爾區)',
        '噗卡糖果店(新赫蘭德區)'
      ]
    },
    {
      id: 22,
      name: '「T&J」起司塊',
      sources: [
        '怪·食惠副食品店(繪空町)',
        '怪·食惠副食品店(米格爾區)',
        '怪·食惠副食品店(新赫蘭德區)'
      ]
    },
    {
      id: 23,
      name: '火腿',
      sources: [
        '普利姆叔叔肉鋪(橋間地)',
        '普利姆叔叔肉鋪(繪空町)',
        '普利姆叔叔肉鋪(米格爾區)'
      ]
    },
    {
      id: 24,
      name: '「糖or鹽」白砂糖',
      sources: [
        '怪·食惠副食品店(繪空町)',
        '怪·食惠副食品店(米格爾區)',
        '怪·食惠副食品店(新赫蘭德區)'
      ]
    },
    {
      id: 25,
      name: '草莓',
      sources: [
        'Myosotis水果店(橋間地)',
        'Myosotis水果店(繪空町)',
        'Myosotis水果店(新赫蘭德區)'
      ]
    }
  ];

  const [items] = useState(initialItems);
  const [selectedItemIds, setSelectedItemIds] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('themeMode');
    if (savedTheme === 'light') return false;
    if (savedTheme === 'dark') return true;
    return true;
  });
  const categoryOrder = [
    '烘焙伴侶',
    '糖or鹽',
    '其他基礎材料',
    '乳製品（非烘焙伴侶）',
    '水果類',
    '蔬菜類',
    '肉類 / 海鮮 / 蛋',
    '甜品 / 糖果',
    '尾項'
  ];
  const itemCategoryMap = {
    '「烘焙伴侶」可可粉': '烘焙伴侶',
    '「烘焙伴侶」抹茶粉': '烘焙伴侶',
    '「烘焙伴侶」淡奶油': '烘焙伴侶',
    '「糖or鹽」海鹽': '糖or鹽',
    '「糖or鹽」白砂糖': '糖or鹽',
    '椰子': '水果類',
    '蘋果': '水果類',
    '柳丁': '水果類',
    '草莓': '水果類',
    '生菜': '蔬菜類',
    '洋蔥': '蔬菜類',
    '番茄': '蔬菜類',
    '新鮮牛肉': '肉類 / 海鮮 / 蛋',
    '新鮮豬肉': '肉類 / 海鮮 / 蛋',
    '火腿': '肉類 / 海鮮 / 蛋',
    '海魚': '肉類 / 海鮮 / 蛋',
    '生雞蛋': '肉類 / 海鮮 / 蛋',
    '牛奶': '乳製品（非烘焙伴侶）',
    '硬質奶油': '乳製品（非烘焙伴侶）',
    '「T&J」起司塊': '乳製品（非烘焙伴侶）',
    '星彩糖': '甜品 / 糖果',
    '糖糖曲奇': '甜品 / 糖果',
    '紅豆': '尾項',
    '麵粉': '其他基礎材料',
    '「9°C」咖啡豆': '其他基礎材料'
  };

  const toggleSelect = (id) => {
    setSelectedItemIds(prev => prev.includes(id) ? prev.filter(sid => sid !== id) : [...prev, id]);
  };

  const selectedItems = useMemo(() => {
    return items.filter(i => selectedItemIds.includes(i.id));
  }, [items, selectedItemIds]);

  const filteredItems = useMemo(() => {
    return items
      .filter(i => i.name.toLowerCase().includes(filterText.toLowerCase()))
      .sort((a, b) => {
        const aCategory = itemCategoryMap[a.name] || '其他基礎材料';
        const bCategory = itemCategoryMap[b.name] || '其他基礎材料';
        const categoryDiff = categoryOrder.indexOf(aCategory) - categoryOrder.indexOf(bCategory);
        if (categoryDiff !== 0) return categoryDiff;
        return a.name.localeCompare(b.name, 'zh-Hant');
      });
  }, [items, filterText]);

  const reorderForColumnMajor = (list, columnCount = 2) => {
    const rowCount = Math.ceil(list.length / columnCount);
    const arranged = [];

    for (let row = 0; row < rowCount; row += 1) {
      for (let col = 0; col < columnCount; col += 1) {
        const index = col * rowCount + row;
        if (index < list.length) {
          arranged.push(list[index]);
        }
      }
    }

    return arranged;
  };

  const orderedItemsForGrid = useMemo(() => {
    return reorderForColumnMajor(filteredItems);
  }, [filteredItems]);

  const optimizedRoute = useMemo(() => {
    if (selectedItems.length === 0) {
      return null;
    }

    const sourceToItems = new Map();

    selectedItems.forEach((item) => {
      item.sources.forEach((source) => {
        if (!sourceToItems.has(source)) {
          sourceToItems.set(source, new Set());
        }
        sourceToItems.get(source).add(item.name);
      });
    });

    const itemNames = selectedItems.map((item) => item.name);
    const fullMask = (1 << itemNames.length) - 1;
    const itemIndexMap = new Map(itemNames.map((name, index) => [name, index]));

    const sourceOptions = Array.from(sourceToItems.entries())
      .map(([source, namesSet]) => {
        let mask = 0;
        const names = Array.from(namesSet);
        names.forEach((name) => {
          mask |= (1 << itemIndexMap.get(name));
        });
        return { source, names, mask };
      })
      .sort((a, b) => b.names.length - a.names.length);

    let bestSelection = null;

    const search = (startIndex, chosenSources, coveredMask) => {
      if (bestSelection && chosenSources.length >= bestSelection.length) {
        return;
      }

      if (coveredMask === fullMask) {
        bestSelection = [...chosenSources];
        return;
      }

      for (let i = startIndex; i < sourceOptions.length; i += 1) {
        const nextCoveredMask = coveredMask | sourceOptions[i].mask;
        if (nextCoveredMask === coveredMask) {
          continue;
        }

        chosenSources.push(sourceOptions[i]);
        search(i + 1, chosenSources, nextCoveredMask);
        chosenSources.pop();
      }
    };

    search(0, [], 0);

    if (!bestSelection) {
      return null;
    }

    return {
      visits: bestSelection.length,
      stores: bestSelection
    };
  }, [selectedItems]);

  useEffect(() => {
    localStorage.setItem('themeMode', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div
      className={`min-h-screen p-4 font-sans selection:bg-yellow-500/30 transition-colors ${
        isDarkMode ? 'bg-zinc-950 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <header
          className={`mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 ${
            isDarkMode ? 'border-b border-slate-800' : 'border-b border-slate-300'
          }`}
        >
          <div className="space-y-1">
            <h1 className="flex items-center gap-4">
              <img
                src={isDarkMode ? '/logo-light.png' : '/logo-dark.png'}
                alt="異環"
                className="h-16 w-auto md:h-20 object-contain"
              />
              <span
                className={`text-2xl md:text-3xl font-black tracking-wide ${
                  isDarkMode ? 'text-slate-100' : 'text-slate-900'
                }`}
              >
                採購清單
              </span>
              <span className="sr-only">異環：購物清單</span>
            </h1>
          </div>
          <div className="w-full md:w-auto flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsDarkMode((prev) => !prev)}
              aria-label="切換主題"
              className={`relative h-10 w-[90px] rounded-full transition-all duration-300 border ${
                isDarkMode
                  ? 'bg-[#111318] border-zinc-800 shadow-[inset_0_1px_2px_rgba(255,255,255,0.06),0_6px_14px_rgba(0,0,0,0.35)]'
                  : 'bg-white border-slate-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.12)]'
              }`}
            >
              <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-zinc-500' : 'text-amber-500'}`}>
                <Sun size={13} />
              </span>
              <span className={`absolute right-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-zinc-300' : 'text-slate-400'}`}>
                <MoonStar size={13} />
              </span>
              <span
                className={`absolute top-1/2 -translate-y-1/2 h-8 w-8 rounded-full transition-all duration-300 flex items-center justify-center ${
                  isDarkMode
                    ? 'left-[50px] bg-zinc-900 text-white shadow-[0_6px_14px_rgba(0,0,0,0.45)] border border-zinc-700'
                    : 'left-1 bg-white text-zinc-700 shadow-[0_4px_10px_rgba(0,0,0,0.18)] border border-slate-300'
                }`}
              >
                {isDarkMode ? <MoonStar size={15} /> : <Sun size={15} />}
              </span>
            </button>
            <div className="relative w-full md:w-80 group">
              <div
                className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-yellow-500 transition-colors ${
                  isDarkMode ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                <Search size={18} />
              </div>
              <input
                placeholder="搜尋材料名稱..."
                className={`w-full rounded-2xl py-3 pl-12 pr-4 outline-none focus:border-yellow-500/50 focus:ring-4 focus:ring-yellow-500/10 transition-all text-sm shadow-inner ${
                  isDarkMode
                    ? 'bg-slate-900/50 border border-slate-800 placeholder:text-slate-600'
                    : 'bg-white border border-slate-300 placeholder:text-slate-400 text-slate-900'
                }`}
                value={filterText}
                onChange={e => setFilterText(e.target.value)}
              />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between px-2">
              <h3 className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                <Package size={14} /> 全部材料 ({filteredItems.length})
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-1 overflow-y-auto max-h-[72vh] pr-2 custom-scrollbar">
              {orderedItemsForGrid.map(item => (
                <button
                  key={item.id}
                  onClick={() => toggleSelect(item.id)}
                  className={`group relative overflow-hidden p-2 rounded-lg border transition-all duration-300 text-left flex items-center justify-between ${
                    selectedItemIds.includes(item.id)
                      ? isDarkMode
                        ? 'bg-yellow-500/10 border-yellow-500/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
                        : 'bg-amber-100 border-amber-400 shadow-[0_8px_20px_rgb(0,0,0,0.08)]'
                      : isDarkMode
                        ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                        : 'bg-white border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5 relative z-10 min-w-0">
                    <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-all duration-500 shrink-0 ${
                      selectedItemIds.includes(item.id)
                        ? 'bg-yellow-500 border-yellow-500'
                        : isDarkMode
                          ? 'border-slate-700 group-hover:border-yellow-500/50'
                          : 'border-slate-400 group-hover:border-yellow-500/60'
                    }`}>
                      {selectedItemIds.includes(item.id) ? (
                        <CheckCircle2 size={14} className="text-black" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-yellow-500/50" />
                      )}
                    </div>
                    <span className={`text-sm font-semibold transition-colors truncate ${
                      selectedItemIds.includes(item.id)
                        ? isDarkMode
                          ? 'text-yellow-500'
                          : 'text-amber-800'
                        : isDarkMode
                          ? 'text-slate-300 group-hover:text-white'
                          : 'text-slate-700 group-hover:text-slate-900'
                    }`}>
                      {item.name}
                    </span>
                  </div>
                  <div className={`text-[9px] font-mono uppercase tracking-tight shrink-0 ${isDarkMode ? 'text-slate-600 group-hover:text-slate-400' : 'text-slate-500 group-hover:text-slate-700'}`}>
                    {item.sources.length} LOCATIONS
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 sticky top-8">
            <div className={`backdrop-blur-sm rounded-3xl border p-8 shadow-2xl relative overflow-hidden min-h-[400px] ${
              isDarkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-300'
            }`}>
              <h2 className={`text-xl font-black mb-8 flex items-center gap-3 border-b pb-6 ${isDarkMode ? 'text-white border-slate-800/50' : 'text-slate-900 border-slate-300'}`}>
                <Store className="text-blue-400" /> 店鋪獲取詳情
              </h2>
              
              {selectedItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-slate-800/50 text-slate-600' : 'bg-slate-200 text-slate-500'}`}>
                    <Package size={32} />
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-600' : 'text-slate-500'}`}>請在左側選擇材料查看位置</p>
                </div>
              ) : selectedItems.length === 1 ? (
                <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-1 w-8 bg-yellow-500 rounded-full" />
                    <span className={`font-black text-lg tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {selectedItems[0].name} 可購買店鋪
                    </span>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    共 <span className={`font-bold ${isDarkMode ? 'text-yellow-400' : 'text-red-600'}`}>{selectedItems[0].sources.length}</span> 個地點，可用作資料覆核。
                  </p>
                  <div className="grid grid-cols-1 gap-2.5">
                    {selectedItems[0].sources.map((source, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-3 text-sm p-4 rounded-2xl border group/loc ${
                          isDarkMode
                            ? 'text-slate-300 bg-slate-950/50 border-slate-800/50'
                            : 'text-slate-700 bg-slate-50 border-slate-200'
                        }`}
                      >
                        <MapPin
                          size={16}
                          className={`group-hover/loc:text-yellow-500 ${
                            isDarkMode ? 'text-yellow-400/70' : 'text-amber-700'
                          }`}
                        />
                        <span className={`transition-colors ${isDarkMode ? 'group-hover/loc:text-white' : 'group-hover/loc:text-slate-900'}`}>{source}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-8 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
                  {optimizedRoute && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="h-1 w-8 bg-blue-400 rounded-full" />
                        <span className={`font-black text-lg tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>最少採買路線</span>
                      </div>
                      <p className={`text-sm mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        建議前往 <span className={`font-bold ${isDarkMode ? 'text-yellow-400' : 'text-red-600'}`}>{optimizedRoute.visits}</span> 間店即可買齊已選材料。
                      </p>
                      <div className="space-y-2.5">
                        {optimizedRoute.stores.map((store, index) => (
                          <div
                            key={store.source}
                            className={`border rounded-2xl p-4 ${isDarkMode ? 'bg-slate-950/60 border-slate-800/60' : 'bg-slate-50 border-slate-200'}`}
                          >
                            <div className="flex items-center justify-between gap-3 mb-2">
                              <span className={`font-semibold ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>{index + 1}. {store.source}</span>
                              <span className="text-[10px] uppercase tracking-wider text-blue-300">
                                {store.names.length} items
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {store.names.map((name) => (
                                <span
                                  key={name}
                                  className={`text-xs rounded-full px-2.5 py-1 border ${
                                    isDarkMode
                                      ? 'text-slate-300 bg-slate-800/80 border-slate-700'
                                      : 'text-slate-700 bg-white border-slate-300'
                                  }`}
                                >
                                  {name}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
      `}} />
    </div>
  );
};

export default App;