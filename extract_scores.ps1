Get-ChildItem "data\reviews\*.js" | Where-Object { $_.Name -ne 'index.js' } | ForEach-Object {
    $name = $_.BaseName
    $content = Get-Content $_.FullName -Raw
    $total = 'N/A'
    $cat = 'unknown'
    $os = 'unknown'
    $dp = 'N/A'; $sec = 'N/A'; $tr = 'N/A'; $uc = 'N/A'; $tp = 'N/A'
    
    if ($content -match 'total:\s*(\d+)') { $total = $matches[1] }
    if ($content -match "category:\s*'([^']+)'") { $cat = $matches[1] }
    if ($content -match 'openSource:\s*(true|false)') { $os = $matches[1] }
    if ($content -match 'dataPrivacy:\s*(\d+)') { $dp = $matches[1] }
    if ($content -match 'security:\s*(\d+)') { $sec = $matches[1] }
    if ($content -match 'tracking:\s*(\d+)') { $tr = $matches[1] }
    if ($content -match 'userControl:\s*(\d+)') { $uc = $matches[1] }
    if ($content -match 'transparency:\s*(\d+)') { $tp = $matches[1] }
    
    Write-Output "$name | $cat | DP:$dp | Sec:$sec | Trk:$tr | UC:$uc | Trans:$tp | Total:$total | OS:$os"
} | Sort-Object
