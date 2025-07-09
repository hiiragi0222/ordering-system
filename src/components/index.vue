<template>
    <div class="layout">
        <div>
            <!-- 左侧菜系选择 -->
             <div class="menu">
                <ul>
                    <li>
                        <a>进店必买</a>
                        <span>1</span>
                    </li>
                    <li><a>进店必买</a></li>
                    <li><a>进店必买</a></li>
                    <li><a>进店必买</a></li>
                    <li><a>进店必买</a></li>
                    <li><a>进店必买</a></li>
                    <li><a>进店必买</a></li>
                </ul>
             </div>
            <!-- 右侧菜系选择 -->
             <div class="main">
                <ul>
                    <li>
                        <img src="./assets/img/9-1.png" width=100 height=100 />
                        <div class="info">
                            <label>果酱酸奶布丁</label>
                            <label>月售1234| 好评度90%</label>
                            <label>
                                <b>￥10</b>
                                <div class="choose">
                                    <a>-</a>
                                    <span>1</span>
                                    <a>+</a>
                                </div>
                            </label>
                        </div>
                    </li>
                    <li>
                        <img src="./assets/img/9-2.png" width=100 height=100 />
                        <div class="info">
                            <label>果酱酸奶布丁</label>
                            <label>月售1234| 好评度90%</label>
                            <label>
                                <b>￥10</b>
                                <div class="choose">
                                    <a>-</a>
                                    <span>1</span>
                                    <a>+</a>
                                </div>
                            </label>
                        </div>
                    </li>
                </ul>
             </div>
             <!-- 合计 -->
            <div class="total"><span class="total-count">10</span>￥100.00 | 配送费￥3.00元</div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

onMounted(async()=>{
    let res = await axios.get('data/cuisine')
    console.log(res);
})
</script>

<style>

</style>