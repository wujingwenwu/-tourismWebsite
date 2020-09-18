<template>
  <div>
    <div class="d-f">
      <!--左边-->
      <div>
        <div class="d-f">
          <div class="weight f-s-16 c-p" @click="articles">旅游攻略</div>
          <div class="f-s-16 c-p m-l-5">/攻略详情</div>
        </div>
        <div class="p-r item1">
          <div v-for="(item,index) in article" :key="index">
            <div class="title m-t-10">{{item.title}}</div>
            <div class="m-t-10 show"></div>
            <div class="d-f p-a item">
              <div>攻略:</div>
              <div class="m-l-10">{{item.account.createdAt}}</div>
              <div class="m-l-10">阅读:</div>
              <div>{{item.watch}}</div>
            </div>
            <div v-html="item.content"></div>
            <div class="d-f icon j-c-c m-t-20">
              <div>
                <FormOutlined class="FormOutlined" />
                <div>评论(0)</div>
              </div>
              <div class="m-l-20">
                <ShareAltOutlined class="FormOutlined" />
                <div>分享</div>
              </div>
            </div>
            <div class="f-w f-s-18">评论</div>
            <div class="m-t-10">
              <a-input v-model:value="value" placeholder="说点什么吧..." />
            </div>
            <div class="d-f icon p-r">
              <div class="clearfix m-t-10">
                <a-upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  list-type="picture-card"
                  :file-list="fileList"
                  @preview="handlePreview"
                  @change="handleChange"
                >
                  <div>
                    <plus-outlined />
                    <div class="ant-upload-text">上传</div>
                  </div>
                </a-upload>
                <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                  <img alt="example" style="width: 100%" :src="previewImage" />
                </a-modal>
              </div>
              <div class="button">
                <a-button type="primary" @click="clickSubmit">提交</a-button>
              </div>
            </div>
            <div class="comment p-r" v-if="comment.length !==0">
             <div v-for="(item,index) in comment.slice((current-1)*pageSize, current*pageSize)" :key="index">
             <div class="comment1">
             <div class="d-f m-t-20 m-l-10">
             <img :src="`http://157.122.54.189:9095${item.account.defaultAvatar}`" alt="" class="logo">
             <div class="m-l-10">{{item.account.nickname}}</div>
             <div class="m-l-10">{{item.account.createdAt}}</div>
             </div>
             <div class="m-t-20 m-l-10">{{item.content}}</div>
             <div class="reply">回复</div>
             <div class="shows"></div>
             </div>
             </div>
                  <div class="m-t-20 m-l-10">
     <a-pagination
            :page-size-options="pageSizeOptions"
            :total="comment.length"
            show-size-changer
            show-quick-jumper
            v-model:current="current"
            v-model:pageSize="pageSize"
            :show-total="total => `共 ${total} 条`"
          >
            <template v-slot:buildOptionText="props">
              <span>{{ props.value }}条/页</span>
            </template>
          </a-pagination>
        </div>
        

            </div>
           <div v-else>
           <div class="comment2 d-f j-c-c a-i-c">
           暂无评论，赶紧抢占沙发！
           </div>
           </div>
          </div>
        </div>
      </div>
      <!--右边-->
      <div class="m-l-20">
        <div class="m-t-10 f-s-16">相关攻略</div>
        <div class="show1 m-t-20"></div>
        <div>
          <div v-for="(item,index) in recommend" :key="index">
            <div class="m-t-10">
              <div>{{item.title}}</div>
              <div class="d-f m-t-20">
                <div>{{item.createdAt}}</div>
                <div class="m-l-10">阅读:</div>
                <div v-if="item.watch===null">
                  <div class="m-l-10">0</div>
                </div>
                <div v-else>
                  <div class="m-l-10">{{item.watch}}</div>
                </div>
              </div>
              <div class="show1 m-t-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute, useRouter } from "vue-router";
import api from "@/components/http/api";
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import { Article, ArticleItem, Recommend } from "@/types/index";
import dayjs from "dayjs";
interface Data {
  name: string;
  id: number;
  article: ArticleItem[];
  value: string;
  recommend: any;
  fileList: any[];
  limit: number;
  start: number;
  comment: any[];
   pageSizeOptions: string[];
  current: number;
  pageSize: number;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    const data: Data = reactive<Data>({
      name: "",
      id: 0,
      article: [],
      value: "",
      recommend: [],
      fileList:[],
      limit: 5,
      start:1,
      comment: [],
      pageSizeOptions: ["3", "5", "10", "15"],
      pageSize: 3,
      current: 1,
    });
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      if (route.query.id) {
        data.id = route.query.id! as any;
      }
      console.log(data.id);
      api
        .getArticles({ id: data.id })
        .then((res: Article) => {
          console.log(res);
          res.data.map((item) => {
            item.account.createdAt = dayjs(item.account.createdAt).format(
              "YYYY-MM-DD HH-mm-ss"
            );
          });
          data.article = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      api
        .getRecommend({ id: data.id })
        .then((res: Recommend) => {
          res.data.map((item: any) => {
            item.createdAt = dayjs(item.createdAt).format(
              "YYYY-MM-DD HH-mm-ss"
            );
          });
          data.recommend = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
        api.getComment({post: data.id,_limit: data.limit,_start: data.start}).then((res: any)=>{
            res.data.map((item: any) => {
            item.account.createdAt = dayjs(item.account.createdAt).format(
              "YYYY-MM-DD HH-mm-ss"
            );
          });
          data.comment=res.data
          console.log(data.comment);
        }).catch((err)=>{
          console.log(err);
        })
    });
    const articles = (): void => {
      router.push("/strategy");
    };
    const clickSubmit=(): void=>{
     console.log(data.value);
    };
    const handleChange=(fileList: any)=>{
    console.log(fileList);
    data.fileList=fileList
    };
    return {
      ...toRefs(data),
      articles,
      clickSubmit,
      handleChange,
    };
  },
});
</script>

<style scoped lang='scss'>
.weight {
  font-weight: 700;
}
.title {
  font-weight: 700;
  color: black;
  font-size: 28px;
  width: 700px;
}
.show {
  width: 700px;
  height: 1px;
  background: #9999;
}
.item {
  color: blanchedalmond;
  right: 47px;
}
.item1 {
  width: 700px;
}
.FormOutlined {
  color: orange;
  font-size: 32px;
}
.icon {
  width: 700px;
}
.button {
  position: absolute;
  right: 20px;
  margin-top: 20px;
}
.show1 {
  width: 280px;
  height: 1px;
  background: #cccccc;
}
.comment{
  width: 700px;
  border: 1px solid #cccccc;
}
.logo{
  width: 20px;
  height: 20px;
}
.shows{
  width: 700px;
  border: 1px dashed #cccccc;
  margin-top: 10px;
}
.reply{
  position: absolute;
  right: 30px;
  margin-top: -20px;
  color: rgb(24,144,255);
  display: none;
}
.comment1:hover .reply{
  display: block;
}
.comment2{
  width: 700px;
  height: 100px;
  border: 1px dashed #cccccc;
}
</style>