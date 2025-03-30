"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useResponsive } from "@/hooks/use-responsive"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Trần Hồng Quyên",
    role: "GKS-G 2022, Political Science, JBNU, Korea",
    avatar: "./assets/img/alumni/quyen.jpg?height=50&width=50",
    rating: 5,
    text: "Hành trình chinh phục thành công học bổng chính phủ Hàn Quốc của mình không thể không kể đến sự đồng hành của Linh và team SEM Scholars. Cảm ơn Linh và team đã giúp mình có được một sự chuẩn bị đầy đủ, kỹ lưỡng và luôn support mình trên chặng đường này ❤️❤️❤️ Mình cũng muốn gửi đến các bạn mentee tương lai một câu quote mình rất thích: “Người thực hiện được ước mơ không phải là người giỏi nhất, mà là người đến cuối vẫn không từ bỏ”. Vậy nên mình tin với sự đam mê, chân thành và kiên trì, chúng ta sẽ sớm đạt được học bổng thôi",
  },
  {
    id: 2,
    name: "Phạm Hoàng Ân",
    role: "GKS-G 2022, MBA, SKKU, Korea",
    avatar: "./assets/img/alumni/an.jpg?height=50&width=50",
    rating: 5,
    text: "Trong quá trình thực hiện bất cứ một dự định hay kế hoạch nào, chúng ta luôn cần những người đồng hành, đặc biệt là những người có kinh nghiệm và có khả năng truyền được cảm hứng để chúng ta có thể hoàn thành được mục tiêu đề ra. Cảm ơn chị Linh và Jinchuriki đã mang đến nguồn năng lượng đó cho mình trong suốt quá trình gấp rút, chỉ vỏn vẹn có 2 tuần, chuẩn bị cho GKS-G 2022.",
  },
  {
    id: 3,
    name: "Đặng Thế Nguyễn",
    role: "GKS-G 2023, Korean language & literature, SNU",
    avatar: "./assets/img/alumni/2023/the_nguyen.jpeg?height=50&width=50",
    rating: 5,
    text: "Em cảm thấy mình thật đúng đắn khi lựa chọn SEM để đồng hành cùng em trong suốt quá trình chuẩn \
        bị cho học bổng GKS 2023. Em nhớ lúc đấy là ngày 7/2 em mới bắt đầu liên hệ cho team và khoảng \
        giữa tháng 2 em mới bắt đầu viết bài luận và chuẩn bị hồ sơ. Do khá gấp nên lúc đó em cũng không thể \
        suy nghĩ được những ý tưởng hay cho bài luận nhưng nhờ có mentor \"ném đá\" và gợi ý cho em khá \
        nhiều nên bài của em cũng dần hoàn thiện hơn. \
        Trong suốt quá trình chuẩn bị học bổng cùng mentor, em cảm thấy mentor của team SEM rất tâm huyết \
        và siêu có tâm khi hướng dẫn trong quá trình chuẩn bị hồ sơ, tỉ mỉ từng câu chữ khi sửa bài luận cho \
        em nên em mong team luôn phát huy điểm này ạ ❤️",
  },
  {
    id: 4,
    name: "Trần Linh Chi",
    role: "GKS-G 2023, Finance, Yonsei",
    avatar: "./assets/img/alumni/Yonsei.jpg?height=50&width=50",
    rating: 5,
    text: "Cảm ơn Linh, Phúc với team SEM rất rất nhiều vì support cho chị hết mình trong suốt 6 tháng apply học bổng. Nhờ có mentor guide từ những ngày đầu viết essay \
    nên chị mới hiểu được tính consistent cần có trong bài essay và chị luôn nghĩ đấy là điều giúp chị đỗ GKS. Điểm phát huy của team SEM thì nhiều lắm kể không hết, chị \
    chỉ nói mong muốn thôi nhé: chị mong team làm việc chuyên nghiệp và tỉ mỉ như vẫn luôn vậy, mở rộng mentor networking đa dạng trường học, đa dạng ngành nghề,",
  },
  {
    id: 5,
    name: "Trang Phạm",
    role: "Ewha PhD Scholarship, Korea",
    avatar: "./assets/img/alumni/Ewha.png?height=50&width=50",
    rating: 5,
    text: "Hi team SEM. Đầu tiên mình rất cảm ơn team (đặc biệt là mentor Minh Đức) đã hỗ trợ mình rất nhiều trong quá trình apply Ph.D. Sau khi nói chuyện với mentor \
    Minh Đức, mình thấy rất ấn tượng vì mong muốn giúp đỡ những bạn/ anh/ chị không có điều kiện tài chính dư dả để du học tự túc của team. Mình hi vọng team có thể tiếp \
    tục phát triển lớn hơn trong tương lai và giúp đỡ được nhiều bạn/ anh/ chị hơn nữa. Vậy nên mình có donate một xíu cho team và hi vọng team sẽ ngày càng lớn mạnh trong\
    tương lai nhé ❤️",
  },
  {
    id: 6,
    name: "Hoàng Giai Ngọc",
    role: "GKS-U 2024, Data Science, KU, Korea",
    avatar: "./assets/img/alumni/KU.jpg?height=50&width=50",
    rating: 5,
    text: "Đầu tiên, em muốn cảm ơn chị Linh vì đã cùng em “chiến đấu” với bài luận vào mỗi buổi tối trong suốt vài tháng qua. Dù cho có muộn như nào, chị vẫn luôn giúp\
    em có được lịch meeting sớm nhất. Khi đó, chị không chỉ giúp em hoàn thiện từng câu chữ mà còn giúp em tìm ra hướng đi về cuộc sống đại học, kể cho em nghe những kinh\
    nghiệm, value mà em tin chắc rằng em không thể nghe ở đâu khác. Em nhớ những lúc chị giúp em tìm ý tưởng, chỉnh sửa bài viết không biết bao nhiêu lần để mọi thứ hoàn \
    hảo nhất. Nhờ có chị mà bài luận của em đã trở thành một trong những thành tích tốt nhất trong toàn bộ hồ sơ. Và em cũng cảm ơn anh Phúc vì đã giúp em rất nhiều trong\
     việc check bài tiếng Hàn, từ chỉnh sửa từ ngữ sao cho chuyên nghiệp hơn đến chuẩn bị cho buổi phỏng vấn. Em vẫn nhớ những buổi luyện tập mà anh kiên nhẫn chỉ cho em\
      từng câu hỏi, động viên giúp em tự tin hơn rất nhiều khi đối diện với ban tuyển sinh. Nếu không có anh trước đó, chắc em đã không thể có được sự tự tin và vững vàng \
      như thế vào hôm phỏng vấn chính thức. Cuối cùng, em cảm thấy rất may mắn khi có cơ hội được đồng hành cùng anh chị trong quá trình này. Sau này, dù đi đến đâu, em \
      cũng sẽ luôn giới thiệu team mentor đến những ai đang cần sự hỗ trợ – vì em biết rằng họ sẽ nhận được sự giúp đỡ tốt nhất, giống như những gì em đã may mắn có được.\
    Một lần nữa, em cảm ơn anh chị rất rất nhiều vì tất cả. Dù hành trình này đã hoàn thành một chặng, nhưng em hy vọng vẫn sẽ luôn giữ liên lạc và có dịp gặp lại anh chị \
    trong tương lai ạ\! Em chúc anh chị và team SEM luôn thành công ạ!",
  },
  {
    id: 7,
    name: "Nguyễn Tiến Quang Vinh",
    role: "KAIST Scholarship 2024, Computer Science, KAIST, Korea",
    avatar: "./assets/img/alumni/quangvinh.jpg?height=50&width=50",
    rating: 5,
    text: " Khi mới bắt đầu có ý định mong muốn đi du học Hàn Quốc hệ tiếng Anh, mình đã rất mông lung trong việc tìm trung tâm tư vấn bởi khá hiếm tổ chức hỗ trợ tư vấn về con đường này, nhưng mình đã may mắn được giới thiệu và biết đến SEM. Qua SEM mà mình đã được tư vấn và định hướng rất rõ về các trường và chương trình học không chỉ ở Hàn mà còn ở các quốc gia khác nữa. Quá trình apply của mình diễn ra trùng với thời gian mình ôn thi HSGQG nên sự hỗ trợ và tư vấn cần thiết về hồ sơ, bài luận và phỏng vấn đã giúp mình giảm bớt rất nhiều áp lực cùng một lúc. Dù xuất phát muộn hơn các bạn rất nhiều nhưng nhờ SEM mà mình đã đỗ các trường Hàn Quốc cũng như các suất học bổng 100% chỉ trong 1.5 tháng. Mình đã trở nên vô cùng tự tin trên hành trình chinh phục các cảnh cửa đại học quốc tế và các học bổng giá trị cao khi có sự sát cánh đến từ SEM và đặc biệt là mentor chính Ngọc Mai.",
  },
  {
    id: 8,
    name: "Trần Thị Minh Phương",
    role: "UIC 100% Scholarship 2025, Economics, Yonsei",
    avatar: "./assets/img/alumni/Yonsei.jpg?height=50&width=50",
    rating: 5,
    text: "Mình nghĩ điểm mạnh nhất trong quá trình apply của mình là phần interview đã kéo cả bộ hồ sơ của mình lên. Trong quá trình mock interview, mentor Ngọc Mai đã mở rộng mindset của mình rất nhiều về định hướng ngành học và nghề nghiệp trong tương lai để mình có thể chuẩn bị tốt trong buổi phỏng vấn. Mình và mentor cũng đã chuẩn bị rất kỹ mọi câu hỏi có thể xuất hiện trong lúc phỏng vấn nên giáo sư hỏi gì mình cũng có ideas để trả lời.",
  },
  {
    id: 9,
    name: "Thảo Nhi",
    role: "Apply GKS-G ngành Giáo dục tiếng Hàn",
    avatar: "./assets/img/alumni/2025/thaonhi.png?height=50&width=50",
    rating: 5,
    text: "Em xin cảm ơn chị Ngọc và team SEM rất nhiều ạ. Chị đã cho em một cái nhìn khác hơn và cách triển khai có hệ thống hơn bài luận của mình.",
  },
  {
    id: 10,
    name: "Hồ Anh Tùng",
    role: "PhD Scholarship, Stony Brook University, USA",
    avatar: "./assets/img/alumni/2025/tung.jpg?height=50&width=50",
    rating: 5,
    text: "Do mình phải gấp rút ôn thi các chứng chỉ, chuẩn bị các tài liệu liên quan như làm hồ sơ, viết luận, và thư giới thiệu,.. nên mình đã\
     gặp rất nhiều khó khăn vì có quá nhiều thông tin làm mình hoang mang chưa biết bắt đầu từ đâu: Viết về điều gì của mình, viết như thế nào,... Ấy vậy, \
     mình gặp được SEM với sự hỗ trợ các mentor như anh Kiên, chị Linh Mon. Mọi người đã giúp mình rất nhiều trong việc sửa bài luận, ân cần chỉ cho mình \
     cần viết gì và viết như thế nào để ấn tượng, hoàn thiện hồ sơ ra sao trong thời gian gấp rút ấy. Từ đó mình thấy việc làm hồ sơ trở nên dễ dàng hơn hẳn,\
     cũng như giảm bớt áp lực về thời gian cùng với vô vàn thông tin cần phải nắm, do đó mình đã đạt được học bổng thành công. Mình cảm thấy may mắn tìm được\
      SEM và cùng mọi người xây dựng hồ sơ thật chỉn chu để nhận được học bổng danh giá bậc PhD của Stony Brook.",
  },
  {
    id: 11,
    name: "Nguyễn Hòa Phan",
    role: "KAIST Scholarship, Computer Science, KAIST, Korea",
    avatar: "./assets/img/alumni/phan.jpg?height=50&width=50",
    rating: 5,
    text: "Hành trình apply học bổng của mình khá gian nan. May thay thì mình đã biết tới SEM. Hồ sơ của mình có nhiều điểm yếu nhưng các mentor ở SEM đã\
    chỉ cho mình cách cải thiện, cũng như cho mình biết những điều mà trường mong đợi ở mình. Giây phút nhận được thư báo đỗ, mình vỡ oà vì cuối cùng đạt \
    được một điều mà mình đã cố gắng từ lâu. Có lẽ uy tín tạo nên danh tiếng. Mình biết đến SEM vì thấy nhiều bạn mentee của SEM đỗ KAIST và GKS-U. Sau khi \
    tìm hiểu thì mình thấy trong SEM có rất nhiều bạn mentor học tại KAIST nên mình quyết định tham gia. Mình tin rằng những người đó sẽ cho mình những thông\
    tin đúng đắn và hữu ích nhất về KAIST cũng như cuộc sống tại Hàn Quốc. Mentor Ngọc Mai là người sửa bài luận cho mình. Có vài thời điểm mình vào file\
    google docs vào lúc 1h sáng hay 2h sáng Việt Nam (3-4h sáng ở Hàn) thì thấy Ngọc Mai đang sửa bài. Mình thật sự bất ngờ vì các mentor của SEM làm việc \
    không ngại giờ giấc, không biết mệt mỏi. Để viết được một bài luận hoàn thiện, thể hiện được tính cách và cá tính của mình là một điều không hề dễ dàng.\
    Mentor Ngọc Mai đã giúp mình rất nhiều trong việc chỉnh sửa câu cũng như ý tưởng của bài luận. Để hoàn thiện một bài luận hoàn chỉnh thì mình đã phải\
    sửa đi sửa lại tận 4-5 lần. Ngoài ra, cách khai thác bài luận cũng quan trọng. Điểm yếu của mình là tiếng anh không tốt và GPA không được cao. Nhưng các\
    mentor đã giúp mình xây dựng hồ sơ thể hiện được những điểm mạnh của mình về học thuật, thể thao, hoạt động ngoại khóa",
  },
  {
    id: 12,
    name: "Thanh Long",
    role: "KAIST Scholarship, AI College, KAIST, Korea. Admission from ETH Zurich and EPFL, Switzerland",
    avatar: "./assets/img/alumni/phan.jpg?height=50&width=50",
    rating: 5,
    text: "Ban đầu mình tìm hiểu SEM Scholars và cảm thấy có thể tin tưởng gửi gắm tương lai của bản thân ở đây. Mình được biết các bạn trong đội ngũ SEM\
    đều là những người có trình độ cao, dày dặn kinh nghiệm và chưa kể mọi người cũng rất nhiệt tình nữa nên mình hoàn toàn tin tưởng SEM khi apply. Nhiều \
    lần mình đã không chắc chắn về nhiều thứ. Những lúc ấy mình thưởng tham khảo từ chị Linh Mon hay những mentor mà mình quen, họ đều đưa ra những lời \
    khuyên hữu ích từ nhiều góc nhìn khác nhau nên đã giúp ích cho mình rất nhiều trong quãng thời gian ấy. Khoảnh khắc mình nhận được học bổng KAIST, mình\
    đã rất vui và mình biết ngành Computer Science không hề dễ. Ở KAIST, mình mong muốn được đi làm research intern ở một số công ty lớn ở Hàn và đặc biệt\
    là có được publication ở top reference vì nó rất khó và mình sẽ cố gắng chinh phục. Mình mong rằng các bạn sẽ không tự so sánh bản thân để bị peer\
    pressure rồi sinh stress. Khi đã quyết định apply thì cứ gạt bỏ hết áp lực và làm hết sức có thể. Hãy chuẩn bị sớm để có đủ thời gian trau chuốt và \
    cùng mentor chỉnh sửa bộ hồ sơ của mình nhé!",
  },
  {
    id: 13,
    name: "Nguyễn Hoàng Minh",
    role: "Yonsei UIC Scholarship, Economics, Yonsei, Korea.",
    avatar: "./assets/img/alumni/phan.jpg?height=50&width=50",
    rating: 5,
    text: "Mình đã tìm hiểu rất kỹ về ngành học, dù biết nhiều bạn cũng đã nghiên cứu về trường, nhưng mình cảm giác ít bạn đi sâu vào ngành học như vậy. \
    Mình đã tìm hiểu rất kỹ và còn có một buổi mock interview với mentor Ngọc Mai ở SEM. Nhờ buổi đó, mình đã học hỏi rất nhiều về kinh tế, về ngành học\
    tương lai để có thể tự tin phỏng vấn và nói rõ là mình muốn học về những tác động của Economics lên nền giáo dục và sau này mình muốn làm research \
    cho những điều này, cũng như mong muốn làm trong những tổ chức giáo dục về vấn để này để phát triển nền giáo dục Việt Nam. Khoảnh khắc nhận được học \
    bổng 100% từ UIC YONSEI mình cảm thấy rất tuyệt vời. Mình cảm ơn SEM Scholars và mentor Ngọc Mai rất nhiều vì đã hỗ trợ mình có được học bổng này.",
  },
  {
    id: 14,
    name: "Nguyễn Cảnh Hoàng",
    role: "PhD Scholarship, Stony Brook University, USA",
    avatar: "./assets/img/alumni/phan.jpg?height=50&width=50",
    rating: 5,
    text: "Mình biết đến SEM qua bạn Linh Mon. Hơn hết, một điều trùng hợp thú vị là các bạn mentors khác cũng là sinh viên tại KAIST, trở thành mối nên \
    duyên của mình và SEM từ đó. Nói về SEM thì mình nhận thấy các bạn, đặc biệt là Linh đều vô cùng tâm huyết, hỗ trợ nhiệt tình, thân thiện và vô cùng \
    chuyên nghiệp. Sau khi biết đến SEM cũng là khoảnh khắc mình tiến hành chuẩn bị cho việc du học Mỹ ở bậc tiến sĩ, khi đó, bạn Linh đã giúp đỡ mình rất \
    nhiều trong bài luận và định hướng du học. Nhờ sự hỗ trợ từ SEM mà mình đã tự tin hơn khi thể hiện bản thân ở trong bài luận cá nhân. Mình rất cảm ơn SEM và \
    bạn Linh đã giúp mình trong quá trình chuẩn bị hồ sơ và bài luận.",
  },
  {
    id: 15,
    name: "Nguyễn Khánh Ngân",
    role: "Full ride scholarship from Fulbright University, Vietnam",
    avatar: "./assets/img/alumni/phan.jpg?height=50&width=50",
    rating: 5,
    text: "Mình ấn tượng đội ngũ mentors của SEM. Ngoài chị Linh, thì mentor Hoàng Liên là người hỗ trợ mình trong việc sửa bài luận. Chị Hoàng Liên đã \
    truyền cho mình rất nhiều cảm hứng và niềm tin. Chị không thẳng thắn phê bình mình là ý này hay, ý này không hay. Thay vào đó, chị giúp mình từng bước \
    selfreflect bản thân để tự mình khám phá và đặt câu hỏi cho chính bản thân mình. Và bởi vì hiểu mình, hiểu những câu chuyện của mình và những điều mình \
    thực sự muốn chia sẻ, đã giúp mình có thể viết luận bằng cả tình yêu và hy vọng của mình. ",
  },
  {
    id: 16,
    name: "Phạm Ngọc Trâm Anh",
    role: "GKS-G, KyungHee University, Korea",
    avatar: "./assets/img/alumni/phan.jpg?height=50&width=50",
    rating: 5,
    text: "Sau những lần tự apply không thành công, mình nhận ra rằng bản thân còn nhiều thiếu sót và đang lạc hướng. Mình cảm thấy cần có một người có kinh\
    nghiệm để chỉ ra những lỗi sai của mình, và SEM với đội ngũ mentor và mentee đã thành công nhận được GKS chính là minh chứng tin cậy. Cuối cùng, nửa cuối\
     năm 2023, mình đã quyết định trở thành SEM mentee cho hành trình tiếp theo. Mentor Linh Mon và Thế Phúc đã giúp mình gợi ý dàn ý và cách xây dựng idea \
     sao cho logic và thuyết phục. Mình đã tìm kiếm ý tưởng từ những điều gần gũi trong cuộc sống, như gia đình hay môi trường làm việc. Mình có một điểm yếu \
     lớn là ngôn từ thể hiện hơi khó hiểu, nhưng hai bạn mentor luôn rất tận tâm, lắng nghe và thấu hiểu hàm ý của mình. Họ đã chỉnh sửa và khai thác điểm mạnh\
     của mình, đặc biệt luôn nhấn mạnh rằng không nên mơ hồ mà phải tạo ra dấu ấn khác biệt cho người đọc. Thực sự cảm ơn hai mentor Linh và Phúc rất nhiều vì \
     giúp mình có một bài luận tuyệt vời như vậy.",
  },
  {
    id: 17,
    name: "Đào Thị Thanh Yến",
    role: "GKS-G, Yonsei University, Korea",
    avatar: "./assets/img/alumni/phan.jpg?height=50&width=50",
    rating: 5,
    text: "Mình biết đến SEM qua mạng xã hội và sự giới thiệu của một người chị đã từng theo học tại Yonsei. Trong quãng thời gian đồng hành cùng các mentor,\
     đặc biệt là sự giúp đỡ của mentor Linh Mon và Ngân Giang, mình có rất nhiều kỷ niệm đáng nhớ. Mình không chỉ trau dồi được khả năng viết luận mà còn cải\
     thiện kỹ năng tham gia phỏng vấn vòng đại sứ quán. Mình nghĩ thời gian đáng nhớ nhất chính là khi chuẩn bị cho buổi phỏng vấn vòng đại sứ quán với Ngân\
     Giang. Những chia sẻ và kinh nghiệm của mentor Ngân Giang đã giúp mình chuẩn bị rất tốt và hoàn toàn tự tin khi bước vào buổi phỏng vấn với các bác và \
     cô ở đại sứ quán. Đây là một trải nghiệm mà mình rất trân trọng và biết ơn.",
  },
  {
    id: 18,
    name: "Nguyễn Thanh Mai",
    role: "GKS-G, Kangwon National University, Korea",
    avatar: "./assets/img/alumni/phan.jpg?height=50&width=50",
    rating: 5,
    text: "Mình rất biết ơn SEM vì sự hỗ trợ trong hành trình apply GKS-G. Các mentor của SEM, đặc biệt là mentor Linh Mon và Ngân Giang, đã giúp mình rất \
    nhiều trong việc viết luận và chuẩn bị phỏng vấn. Bộ tài liệu của SEM giúp mình hiểu rõ cấu trúc bài luận và những điều cần tránh khi viết, từ đó giúp \
    mình tự viết được bản thảo đầu tiên. Các mentor đã tận tình sửa bài, đưa ra những lời khuyên hữu ích, giúp mình trình bày suy nghĩ mạch lạc và chân thực \
    nhất. Và cũng nhờ phỏng vấn thử, mình đã tự tin hơn khi bước vào phỏng vấn thực tế. SEM thực sự là một người bạn đồng hành đáng tin cậy trong hành trình \
    này.",
  },
  {
    id: 19,
    name: "Quách Diệu Linh",
    role: "GKS-G, Kyungpook University, Korea",
    avatar: "./assets/img/alumni/phan.jpg?height=50&width=50",
    rating: 5,
    text: "Không chỉ là ấn tượng mà mình còn muốn cảm ơn mentor của mình là Hoàng Liên vì sự nhiệt tình vô cùng tận của em ấy. Có những hôm mình và Liên vừa \
    ngủ dậy đã meet với nhau để sửa bài, mặt mày 2 đứa bơ phờ mà vẫn gắng dí deadline cùng nhau chạy. Mình biết Liên rất bận, em ấy vừa phải học, vừa phải \
    làm những công việc khác nhưng mỗi khi mình cần hỏi bất cứ điều gì, kể cả trong hay sau quá trình apply, Liên vẫn trả lời mình rất rất nhiệt tình. Cảm \
    ơn SEM rất nhiều vì đã giúp mình chinh phục GKS!!",
  },
]

export function TestimonialCarousel() {
  const [currentPage, setCurrentPage] = React.useState(0)
  const [autoplay, setAutoplay] = React.useState(true)
  const { isMobile, isTablet, isDesktop, isLargeDesktop } = useResponsive()

  // Determine how many items to show based on screen size
  const visibleItems = React.useMemo(() => {
    if (isMobile) return 1
    if (isTablet) return 2
    if (isDesktop && !isLargeDesktop) return 3
    return 4 // isLargeDesktop
  }, [isMobile, isTablet, isDesktop, isLargeDesktop])

  // Calculate total pages
  const totalPages = Math.ceil(testimonials.length / visibleItems)

  // Handle navigation
  const nextPage = React.useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }, [totalPages])

  const prevPage = React.useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }, [totalPages])

  // Autoplay functionality
  React.useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextPage()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, nextPage])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  // Get current testimonials
  const currentTestimonials = React.useMemo(() => {
    const startIndex = currentPage * visibleItems
    return testimonials.slice(startIndex, startIndex + visibleItems)
  }, [currentPage, visibleItems])

  // Reset current page when visible items change to avoid empty pages
  React.useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0)
    }
  }, [visibleItems, totalPages, currentPage])

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Testimonials */}
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center mt-8 gap-4">
        <Button variant="outline" size="icon" className="rounded-full" onClick={prevPage}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={cn(
                "h-2 w-2 rounded-full p-0",
                currentPage === index ? "bg-primary" : "bg-muted-foreground/20 hover:bg-muted-foreground/40",
              )}
              onClick={() => setCurrentPage(index)}
            >
              <span className="sr-only">Page {index + 1}</span>
            </Button>
          ))}
        </div>

        <Button variant="outline" size="icon" className="rounded-full" onClick={nextPage}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Limit the text length for preview
  const previewLength = 500; // Adjust this value based on your design

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn("h-4 w-4", i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted")}
            />
          ))}
        </div>

        <p className="text-sm text-muted-foreground flex-grow mb-4">
          {isExpanded ? testimonial.text : `${testimonial.text.slice(0, previewLength)}...`}
        </p>
        {testimonial.text.length > previewLength && (
        <button 
          onClick={handleToggle} 
          className="text-blue-500 hover:underline">
          {isExpanded ? "Read Less" : "Read More"}
        </button>
        )}

        <div className="flex items-center gap-3 mt-auto pt-4 border-t">
          <Avatar className="h-10 w-10">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>
              {testimonial.name.charAt(0)}
              {testimonial.name.split(" ")[1]?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

