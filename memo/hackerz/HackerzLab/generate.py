#! /usr/bin/env python
# -*- coding: utf-8 -*-

import os
import random
import string


def generate_random_str(length=5):
    u"""ランダム文字列の生成"""
    return ''.join([random.choice(string.ascii_letters + string.digits) for i in range(length)])

def generate_random_list(length=100):
    u"""指定した長さのリストをランダムな文字列で生成する"""
    random_list = []
    for i in range(length):
        random_list.append(generate_random_str(5))
    return random_list
    
def generate_random_file(row=100):
    u"""ファイルに指定した行数分、ランダムな文字列を書き込む。
    """
    # ランダム文字列のリスト
    random_list = generate_random_list(row)
    # 書き込み
    with open('HLH_20170122_02.txt', mode = 'w') as fw:
        for s in random_list:
            fw.write(s + os.linesep)
            
def generate_random_file_blankplus(row=100, blank=100):
    u"""ファイルに指定した行数分、ランダムな文字列を書き込む。
    ＋ランダムに空行を入れる
    """
    # ランダム文字列のリスト
    random_list = generate_random_list(row)
    # リストからランダムにサンプリング
    random_blankline = random.sample(random_list, blank)
    # 書き込み
    with open('HLH_20170122_02.txt', mode = 'w') as fw:
        for s in random_list:
            # sep = os.linesep
            sep = '\n'
            if s in random_blankline:
                fw.write(s + sep + sep)
            else:
                fw.write(s + sep)
    
def main():
    # ランダムな文字列を指定行数分ファイルに書き込み
    # generate_random_file(10000)
    
    # ランダムな文字列を指定行数分ファイルに書き込み(指定行数分空行を入れ込む)
    generate_random_file_blankplus(8946, 89)

if __name__ == "__main__":
    main()
    