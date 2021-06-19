#  Thread Instance Methods

# threads = []
# # adding first thread
# threads << Thread.new { puts "Whats the big deal?" }
#
# # adding second thread
# threads << Thread.new {
#   3.times {
#     puts "Threads are fun!"
#     sleep(1)
#   }
# }
# threads.each { |thr| thr.join }
# # join -> Let thread thr finish & suspend other threads










#
# thr1 =  Thread.new {
#   puts "I'm first thread"
#   sleep(2)
#   puts "written by first"
# }
#
# puts "Status after Declaring the thread: " + thr1.status.to_s
# Thread.kill(thr1)
# # puts "Status after killing that thread:" + thr1.alive?.to_s
# puts "Status after killing that thread:" + thr1.status.to_s
#
# thr1.join
# puts "Status after joining that thread:" + thr1.status.to_s
#
#
#









thr2 = Thread.new{sleep}
puts "Status thr2: " + thr2.status.to_s

thr2.exit
# exit terminate this thread and schedules another thread to be run.
puts "Status thr2: " + thr2.status.to_s
thr2.join
puts "Status thr2: " + thr2.status.to_s







#
[
  Thread.new { Thread.current["name"] = "A" },
  Thread.new { Thread.current[:name]  = "B" },
  Thread.new { Thread.current["name"] = "C" }
].each do |th|
  th.join
  puts "#{th.inspect}: #{th[:name]}"
end
# Alias for: to_s





